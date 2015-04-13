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
    
    var perPage = 10,
        price,
        color,
        size;
        
    function ajaxRequest(perPage, price, color, size, page) 
    {
        var priceFrom,
            priceTo;
    
        priceFrom = priceDropdown[price].from;
        priceTo = priceDropdown[price].to;
        
        return $.ajax({
            url: '',
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
    
    $(function () {
        var $price = $('.price');
        
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
    });
})(jQuery);


