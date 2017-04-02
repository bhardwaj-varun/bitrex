$(document).ready(function () {
    validateInputFields();
   $(document).on('click','#submit-register',function (e) {
       e.preventDefault();
       var info={
                    name:$('#register-name').val().trim(),
                    email:$('#register-email').val().trim(),
                    phone:$('#register-phone').val().trim(),
                    college:$('#register-college').val().trim(),
                    university:$('#register-university').val().trim(),
                    course:$('#register-course').val().trim(),
                    regtype:$("#register-include-tshirt").is(':checked')?2:1,
                    address:$('#register-address').val().trim(),
                    style:$("#tshirt-div").find($("input:checked")).val().trim(),
                    size:$('#register-tshirt-size').val().trim(),
                    isISC:$("#isc").is(':checked') ? 1 : 0
       };
       info=JSON.stringify(info);
       //console.log(info);
       if(validateRegFormFilled())
        registerFest(info);
       else
           $("#modal-reg-err").modal('toggle');

   });
});
var validateRegFormFilled=function () {

    var flag=1;
    var text = $('#register-name').val().trim();
    var result =validateName(text);

    flag &= result ? 1:0;
    console.log('name : '+flag);
    text = $('#register-email').val().trim();
    result =validateEmail(text);
    flag &= result ? 1:0;
    console.log('email : '+flag);
    text = $('#register-phone').val().trim();
    result = $.isNumeric(text);
    flag &= result ? 1:0;
    console.log('phone : '+flag);
    text = $('#register-university').val().trim();
    result = text.length > 0; //validateCollege(text);
    flag &= result ? 1:0;
    console.log('university: '+flag);
    text = $('#register-college').val().trim();
    result =text.length > 0;//validateCollege(text);
    flag &= result ? 1:0;
    console.log('college : '+flag);
    text = $('#register-address').val().trim();
    result = text.length>0;//validateAddress(text);
    flag &= result ? 1:0;
    console.log('address: '+flag);
    return flag;


};
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
                $('#register-email-warn').html('Invalid Symbols in Email');
            }
            else {
                $('#register-email-warn').html('');
            }
        }
    });

    $('#register-phone').bind('change',function (e) {
        if($('#register-phone').val().trim().length >0) {
            var text = $('#register-phone').val().trim();
            var result = $.isNumeric(text);
            console.log(text + ' ' + result);
            if (!result) {
                $('#register-phone-warn').html('Invalid Symbols in Phone');
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
                $('#register-university-warn').html('Invalid Symbols in University');
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
                $('#register-college-warn').html('Invalid Symbols in college');
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
                $('#register-course-warn').html('Invalid Symbols in Course');
            }
            else {
                $('#register-course-warn').html('');
            }
        }
    });
    $(document).on('change','#register-address',function (e) {
        if($('#register-address').val().trim().length >0) {
            var text = $('#register-address').val().trim();
            var result = validateAddress(text);
            console.log(text + ' ' + result);
            if (!result) {
                $('#register-address-warn').html('Invalid Symbols in Address');
            }
            else {
                $('#register-address-warn').html('');
            }
        }
    });
};
var registerFest = function(info){

    $.ajax({
        url:"Register.php",
        type:"post",
        data:info,
        async:true,
        success:function(response){
            console.log(response);
             jsondata=$.parseJSON(response);
             if(jsondata.msg){
                 if($("#isc").is(':checked')){

                     if($('#register-include-tshirt').is(':checked')) {
                         $('#cost').html('Pay <i class="fa fa-inr"></i> 300 (T-shirt  Cost)');
                         $('#cost').css('font-size','20px');
                         $('#modal-payment').modal('toggle');
                     }
                     else {
                         $("#modal-success").modal('toggle');
                     }
                 }
                 else{
                     if($('#register-include-tshirt').is(':checked')) {
                          $('#cost').html('Pay <i class="fa fa-inr"></i> 200(Registration Fee) + <i class="fa fa-inr"></i> 300(T-shirt)');
                          $('#cost').css('font-size','15px');
                          $('#modal-payment').modal('toggle');
                     }
                     else {
                         $('#cost').html('Pay <i class="fa fa-inr"></i> 200 (Registration Fee)');
                         $("#modal-payment").modal('toggle');
                     }
                 }

             }else{
                $("#error-msg").html(jsondata.err);
                 $("#modal-err").modal('toggle');
             }
        },
        error: function(response, status, errorThrown) {
            console.log(response+status);
            alert(response) ; //result from server if error occured
            alert(errorThrown);  //error code
        },
        cache: false,
        contentType: false,
        processData: false
    });
};
