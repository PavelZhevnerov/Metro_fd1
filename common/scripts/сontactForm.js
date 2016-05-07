(function ($) {
    var emailRegEx = /([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/;
    $(document).ready(function () {
        $('.input__addButton').on('click', function () {
            var email = prompt('Please, enter email.', '');

            if (emailRegEx.test(email)){
                $('.input__valueCollection').append(
                    $('<div>')
                        .addClass('input__valueCollectionItem')
                        .text(email)
                );
            } else {
                alert('"' + email + '" is not email.')
            }
        });
    });
})(jQuery);