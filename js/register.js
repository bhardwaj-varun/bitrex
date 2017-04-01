var flag=0;
$(document).ready(function () {
    validateRegForm();
   $(document).on('click','#submit-register',function (e) {
       e.preventDefault();
        alert(flag);
       var info={
                    name:$('#register-name').val(),
                    email:$('#register-email').val(),
                    phone:$('#register-phone').val(),
                    college:$('#register-college').val(),
                    university:$('#register-university').val(),
                    course:$('#register-course').val(),
                    regtype:$("#register-include-tshirt").is(':checked')?2:1,
                    address:$('#register-address').val(),
                    style:$("#tshirt-div").find($("input:checked")).val(),
                    size:$('#register-tshirt-size').val(),
                    isISC:$("#isc").is(':checked') ? 1 : 0
       };
       info=JSON.stringify(info);
       //console.log(info);
      // registerFest(info);

   })
});
var validateRegForm=function () {
    var flag=1;
    $(document).on('blur','#register-name',function (e) {
        var text=$('#register-name').val();
        var result=validateName(text);
        flag &= result ? 1:0;
        if(!result){
            $('#register-name-warn').html('Invalid Symbols in Name');
        }
        else{
            $('#register-name-warn').html('');
        }
    });
    $(document).on('blur','#register-email',function (e) {
        var text=$('#register-email').val();
        var result=validateEmail(text);
        flag &= result ? 1:0;
        if(!result){
            $('#register-email-warn').html('Invalid Email ID');
        }
        else{
            $('#register-email-warn').html('');
        }
    });
    $(document).on('blur','#register-phone',function (e) {
        var text=$('#register-phone').val();
        var result=validatePhone(text);
        alert(result);
        flag &= result ? 1:0;
        if(!result){

            $('#register-phone-warn').html('Invalid Mobile No');
        }
        else{
            $('#register-phone-warn').html('');
        }

    });
    $(document).on('blur','#register-university',function (e) {
        var text=$('#register-university').val();
        var result=ValidateCollege(text);
        flag &= result ? 1:0;
        if(!result){
            $('#register-university-warn').html('Invalid Symbols in University Name');
        }
        else{
            $('#register-university-warn').html('');
        }
    });
    $(document).on('blur','#register-college',function (e) {
        var text=$('#register-college').val();
        var result=ValidateCollege(text);
        flag &= result ? 1:0;
        if(!result){
            $('#register-college-warn').html('Invalid Symbols in college Name');
        }
        else{
            $('#register-college-warn').html('');
        }
    });
    $(document).on('blur','#register-course',function (e) {
        var text=$('#register-course').val();
        var result=ValidateCollege(text);
        flag &= result ? 1:0;
        if(!result){
            $('#register-course-warn').html('Invalid Symbols in Course Name');
        }
        else{
            $('#register-course-warn').html('');
        }
    });
    $(document).on('blur','#register-address',function (e) {
        var text=$('#register-address').val();
        var result=validateAddress(text);
        flag &= result ? 1:0;
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
