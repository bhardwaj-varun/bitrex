$(document).ready(function () {

    $(document).on('click','#submit-info',function(e){
            e.preventDefault();
            var info={email:$('#email-info').val()}
            info=JSON.stringify(info);
            getInfo(info);
    });
});
var getInfo = function (info) {
    var div='';
    var jsondata='';
    $.ajax({
        url: "Info.php",
        type: "post",
        data: info,
        async: true,
        success: function (response) {
            console.log(response);
            jsondata=$.parseJSON(response);
            if(jsondata.msg.registered==1){
                $('#name').html(jsondata.msg.name);
                $('#isc').html('From I.Sc: '+jsondata.msg.isc);
                $('#college').html(jsondata.msg.college);
                $('#university').html(jsondata.msg.university);
                if(jsondata.msg.regtype==2) {
                    $('#style').html('T-Shirt Style: '+jsondata.msg.style);
                    $('#size').html('T-Shirt Size: '+jsondata.msg.size);
                }
            }else $('#name').html('Not Registered');
        },
        error: function (response, status, errorThrown) {
            console.log(response + status);
            alert(response); //result from server if error occured
            alert(errorThrown);  //error code
        },
        cache: false,
        contentType: false,
        processData: false
    });
};