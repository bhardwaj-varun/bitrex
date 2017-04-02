$(document).ready(function () {
        validateInputFields();
});
var validateInputFields=function(){
    $(document).on('change','#register-name',function (e) {
        if($('#register-name').val().trim().length >0) {
            var text = $('#register-name').val().trim();
            var result = validateName(text);
            console.log(text + ' ' + result);
            if (!result) {
                $('#register-name-warn').html('Invalid Symbols in Name');
            }
            else {
                $('#register-name-warn').html('');
            }
        }
    });
    $(document).on('change','#register-email',function (e) {
        if($('#register-email').val().trim().length >0) {
            var text = $('#register-email').val().trim();
            var result = validateEmail(text);
            console.log(text + ' ' + result);
            if (!result) {
                $('#register-email-warn').html('Invalid Symbols in Name');
            }
            else {
                $('#register-email-warn').html('');
            }
        }
    });

    $('#register-phone').bind('change',function (e) {
        if($('#register-phone').val().trim().length >0) {
            var text = $('#register-phone').val().trim();
            var result = validatePhone(text);
            console.log(text + ' ' + result);
            if (!result) {
                $('#register-phone-warn').html('Invalid Symbols in Name');
            }
            else {
                $('#register-phone-warn').html('');
            }
        }
    });
    $(document).on('change','#register-university',function (e) {
        if($('#register-university').val().trim().length >0) {
            var text = $('#register-university').val().trim();
            var result = validateCollege(text);
            console.log(text + ' ' + result);
            if (!result) {
                $('#register-university-warn').html('Invalid Symbols in Name');
            }
            else {
                $('#register-university-warn').html('');
            }
        }
    });
    $(document).on('change','#register-college',function (e) {
        if($('#register-college').val().trim().length >0) {
            var text = $('#register-college').val().trim();
            var result = validateCollege(text);
            console.log(text + ' ' + result);
            if (!result) {
                $('#register-college-warn').html('Invalid Symbols in Name');
            }
            else {
                $('#register-college-warn').html('');
            }
        }
    });
    $(document).on('change','#register-course',function (e) {
       if($('#register-course').val().trim().length >0) {
            var text = $('#register-course').val().trim();
            var result = validateCollege(text);
            console.log(text + ' ' + result);
            if (!result) {
                $('#register-course-warn').html('Invalid Symbols in Name');
            }
            else {
                $('#register-course-warn').html('');
            }
       }
    });
    $(document).on('keyup','#register-address',function (e) {
        var text=$('#register-address').val().trim();
        var reg=new RegExp('[a-zA-Z ./-]','g')
        console.log(text+ reg.test(text));
        /*if($('#register-address').val().trim().length >0) {
            var text = $('#register-address').val().trim();

            var result = validateAddress(text);
            console.log(text + ' ' + result);
            if (!result) {
                $('#register-address-warn').html('Invalid Symbols in Name');
            }
            else {
                $('#register-address-warn').html('');
            }
        }
        */
    });
};
var validateForm=function () {

};