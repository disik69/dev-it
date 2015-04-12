price = {
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

(function ($) {
    
    $(function () {
        var $price = $('.price');
        
        for (var i in price) {
            var $priceOption = $('<option>'),
                priceLabel = '';
                
            $priceOption.val(i);
            
            if (!price[i].from) {
                priceLabel = 'Under $' + price[i].to;
            } else if (!price[i].to) {
                priceLabel = 'Above $' + price[i].from;
            } else {
                priceLabel = '$' + price[i].from + ' - $' + price[i].to;
            }
            
            $price.append($priceOption.append(priceLabel));
        }
    });
})(jQuery);


