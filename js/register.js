$(document).ready(function () {
   $(document).on('click','#submit-register',function (e) {
       e.preventDefault();
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
