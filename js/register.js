$(document).ready(function () {
    validateRegForm();
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
           alert('Fill all fields first');

   });
});
var validateRegFormFilled=function () {
  /*  var flag=1;
    var text=$('#register-name').val().trim();
    var result=validateName(text);
    flag &= result ? 1:0;
    text=$('#register-email').val().trim();
    result=validateEmail(text);
    flag &= result ? 1:0;
    text=$('#register-phone').val().trim();
    result=validatePhone(text);
    flag &= result ? 1:0;
    text=$('#register-university').val().trim();
    result=ValidateCollege(text);
    flag &= result ? 1:0;
    text=$('#register-college').val().trim();
    result=ValidateCollege(text);
    flag &= result ? 1:0;
    text=$('#register-address').val().trim();
    result=validateAddress(text);
    flag &= result ? 1:0;
    return flag;*/

};
var validateRegForm=function () {

    $(document).on('focusout','#register-name',function (e) {
        flag=1;
        var text=$('#register-name').val().trim();
        var result=validateName(text);
        if(!result){
            $('#register-name-warn').html('Invalid Symbols in Name');
        }
        else{
            $('#register-name-warn').html('');
        }
    });
    $(document).on('focusout','#register-email',function (e) {
        var text=$('#register-email').val().trim();
        var result=validateEmail(text);
        if(!result){
            $('#register-email-warn').html('Invalid Email ID');
        }
        else{
            $('#register-email-warn').html('');
        }
    });
    $(document).on('focusout','#register-phone',function (e) {
        var text=$('#register-phone').val().trim();
        var result=validatePhone(text);
        if(!result){

            $('#register-phone-warn').html('Invalid Mobile No');
        }
        else{
            $('#register-phone-warn').html('');
        }

    });
    $(document).on('focusout','#register-university',function (e) {
        var text=$('#register-university').val().trim();
        var result=ValidateCollege(text);
        if(!result){
            $('#register-university-warn').html('Invalid Symbols in University Name');
        }
        else{
            $('#register-university-warn').html('');
        }
    });
    $(document).on('focusout','#register-college',function (e) {
        var text=$('#register-college').val().trim();
        var result=ValidateCollege(text);
        if(!result){
            $('#register-college-warn').html('Invalid Symbols in college Name');
        }
        else{
            $('#register-college-warn').html('');
        }
    });
    $(document).on('focusout','#register-course',function (e) {
        var text=$('#register-course').val().trim();
        var result=ValidateCollege(text);
        if(!result){
            $('#register-course-warn').html('Invalid Symbols in Course Name');
        }
        else{
            $('#register-course-warn').html('');
        }
    });
    $(document).on('focusout','#register-address',function (e) {
        var text=$('#register-address').val().trim();
        var result=validateAddress(text);
        if(!result){
            $('#register-address-warn').html('Invalid Symbols in address Name');
        }
        else{
            $('#register-address-warn').html('');
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
            //console.log(response);
             jsondata=$.parseJSON(response);
             if(jsondata.msg){
                 if($("#isc").is(':checked'))
                     $("#modal-success").modal('toggle');
                 else
                     $("#modal-payment").modal('toggle');
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
