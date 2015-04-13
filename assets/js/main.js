(function ($) {
    var priceDropdown = {
        1: {
            from: 0,
            to: 9.99,
        },
        2: {
            from: 10.00,
            to: 19.99,
        },
        3: {
            from: 20.00,
            to: 29.99,
        },
        4: {
            from: 30.00,
            to: 39.99,
        },
        5: {
            from: 40.00,
            to: 49.99,
        },
        6: {
            from: 50.00,
            to: 74.99,
        },
        7: {
            from: 100.00,
            to: 0,
        },
    };
    
    var perPage = 7,
        price,
        size,
        color;
    
    $(function () {
        var $price = $('.price'),
            $size = $('.size'),
            $color = $('.color'),
            $pageBox = $('.page-box');
            
        function getAjax(page)
        {    
            page = page || '';

            var priceFrom,
                priceTo;

            priceFrom = (price > 0) ? priceDropdown[price].from : '';
            priceTo = (price > 0) ? priceDropdown[price].to : '';

            return $.ajax({
                url: '/clothes',
                type: 'GET',
                data: {
                    'per-page': perPage,
                    'price-from': priceFrom,
                    'price-to': priceTo,
                    'color': color,
                    'size': size,
                    'page': page,
                },

                dataType: 'json',
            });
        }
        
        function renderContent(clothes)
        {
            var $contentBox =  $('.content-box');

            $contentBox.empty();

            for (var i in clothes) {
                var $item = $('<div>').addClass('col-xs-12 col-sm-6 col-md-4 col-lg-3');

                $item
                .append($('<img>').attr({'src': '/uploads/' + clothes[i].photo, 'alt': clothes[i].name}))

                .append($('<p>').append(clothes[i].name))
                .append($('<p>').addClass('item-color').append(clothes[i].color))
                .append($('<p>').addClass('item-price').append('$' + clothes[i].price));

                $contentBox.append($item);
            }
        }
        
        function request() 
        {
            price = $price.val();
            size = $size.val();
            color = $color.val();
            
            $pageBox.empty()
            
            getAjax()
            .done(function (data) {
                if (data.count > perPage) {
                    var $pagination = $('<ul>').addClass('pagination');
            
                    $pagination.paging(
                        data.count,
                        { 
                            format: '[<nncnn>]', 
                            perpage: perPage, 
                            lapping: 0, 
                            page: 1, 
                            
                            onSelect: function (page) {
                                getAjax(page)
                                .done(function (data) {
                                    renderContent(data.clothes);
                                    $('html, body').scrollTop(0);
                                });
                            },

                            onFormat: function (type) {
                                var result = '<li';

                                if (!this.active) {
                                    result += ' class="disabled"';
                                } else if (this.value == this.page) {
                                    result += ' class="active"'
                                }

                                result += '><a href="#">';

                                switch (type) {
                                    case 'block': // n and c
                                        result += this.value;
                                        break;
                                        
                                    case 'next': // >
                                        result += '&gt;';
                                        break;

                                    case 'prev': // <
                                        result += '&lt;';
                                        break;

                                    case 'first': // [
                                        result += 'first';
                                        break;

                                    case 'last': // ]
                                        result += 'last';
                                        break;
                                }

                                return result += '</a></li>';
                            }
                        }
                    );
            
                    $pageBox.append($pagination);
                } else {
                    renderContent(data.clothes);
                }
            });
        }
        
        for (var i in priceDropdown) {
            var $priceOption = $('<option>'),
                priceLabel = '';
                
            $priceOption.val(i);
            
            if (!priceDropdown[i].from) {
                priceLabel = 'Under $' + priceDropdown[i].to;
            } else if (!priceDropdown[i].to) {
                priceLabel = 'Above $' + priceDropdown[i].from;
            } else {
                priceLabel = '$' + priceDropdown[i].from + ' - $' + priceDropdown[i].to;
            }
            
            $price.append($priceOption.append(priceLabel));
        }
        
        request();
        
        $price.change(function () {
            request();
        });
        $size.change(function () {
            request();
        });
        $color.change(function () {
            request();
        });
    });
})(jQuery);


