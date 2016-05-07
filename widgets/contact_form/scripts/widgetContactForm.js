(function ($) {
    var emailRegEx = /([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/;
    $(document).ready(function () {
        $('.input__addButton').on('click', function (e) {
            var email = prompt('Please, enter email.', '');

            if (emailRegEx.test(email)){
                $('.input__valueCollection').append(
                    $('<div>')
                        .addClass('input__valueCollectionItem')
                        .text(email)
                        .data('email-data', email)
                );
            } else {
                alert('"' + email + '" is not email.')
            }

            $('.input__valueCollectionItem').unbind('click');
            $('.input__valueCollectionItem').on('click', onInputValueCollectionItemClick);

            var emailArray = [];
            $('.input__valueCollectionItem').each(function () {
                emailArray.push($(this).data('email-data'));
            });

            $('input[name="emails"]').val(emailArray.join(';'));

            return false;
        });

        function onInputValueCollectionItemClick() {
            $(this).remove();
        }

        $('.button_sendMail').on('click', function () {
            $.ajax({
                type: "POST",
                url: 'http://185.47.153.47:9990/sendmail',
                data: $('form').serialize()
            }).always(function () {
                $('form input[type=text], form textarea').val('');
                $('.input__valueCollectionItem').remove();
            });

            return false;
        })
    });
})(jQuery);