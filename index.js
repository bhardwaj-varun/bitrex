$(document).ready(function(e){
        $(document).on('click','#submit',function(e){
                e.preventDefault();
                validate();
                var info={
                          email:$('#email').val(),
                          name:$('#name').val(),
                          phone:$('#phone').val(),
                          college:$('#college').val(),
                          university:$('#university').val(),
                          course:$('#course').val(),
                          regtype:$('#regtype').val(),
                          isISC:$("#isISC").val(),
                          "tshirt":{
                              "style":$("#style").val(),
                              "color":$("#color").val(),
                              "size":$("#size").val(),
                              "isPremium":$("#isPremium").val()
                          },
                          "accomodation":{
                                "dateOfArrival":$("#doa").val(),
                                "dateOfDeparture":$("#dod").val()
                          }
            };
                info=JSON.stringify(info);
              //  alert(info);   
                console.log(info);
                insertInfo(info);
        });
});

var validate=function(){
    var emailReg = /^\w+([-+.'][^\s]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    var phoneReg = /^(?![8]{10}|[9]{10})[7-9]{1}[0-9]{9}$/;
    var textReg = /^([a-zA-Z]{3,})$/;
    var emailres= emailReg.test($('#email').val());// this return rvesult in boolean type
    var phoneres= phoneReg.test($('#phone').val());
    var isCollege = textReg.test($("#college").val());
    var isUniversity = textReg.test($("#university").val());
    var isName= textReg.test($("#name").val()); 
    var isCourse = textReg.test($("#course").val());
    var regTypeReg =/^([0-3]{1})$/;
    var isRegType= regTypeReg.test($("#regtype").val());
  //  alert('email: '+emailres +' '+'phone: '+phoneres + 'name: ' + isName +'college: ' + isCollege
  //         +' University:'+ isUniversity + ' course: ' + isCourse + 'RegType: '+isRegType);
    
}
var insertInfo=function(info){
    $.ajax({
        url:"Register-test.phpt.php",
        type:"post",
        data:info,
        async:true,
        success:function(response){
            alert(response);
            /*jsondata=$.parseJSON(response);
            if(jsondata.msg){
                alert(jsondata.msg);
            }else{
                alert(jsondata.error);
            }*/
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

