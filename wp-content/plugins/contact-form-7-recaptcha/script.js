function contact_form_7_recaptcha_callback() {
    jQuery(function($){
        $('.g-recaptcha-explicit-id').each(function(){
            $(this).data('grecaptcha_id', grecaptcha.render($('#' + this.value)[0], {
                'sitekey' : contact_form_7_recaptcha_data.sitekey
            }));
        });
    });
};

jQuery(function($){
    $('.wpcf7').on('invalid.wpcf7 mailsent.wpcf7', function() {
        grecaptcha.reset($('.g-recaptcha-explicit-id', this).data('grecaptcha_id'));
    });
});