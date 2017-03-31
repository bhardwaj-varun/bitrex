$(document).ready(function(e){
        $(document).on('click','#submit-algoholic',function(e){
            e.preventDefault();
            var info = { event: "algoholics", email:$("#email-algoholic").val() }
            info = JSON.stringify(info);
            console.log(info);
            registerEvent(info);
        });
        $(document).on('click','#submit-code-ninja',function(e){
            e.preventDefault();
            var info = { event: "code_ninja", email:$("#email-code-ninja").val() }
            info = JSON.stringify(info);
            console.log(info);
            registerEvent(info);
        });
        $(document).on('click','#submit-hts',function(e){
            e.preventDefault();
            var info = { event: "hts", email:$("#email-hts").val() }
            info = JSON.stringify(info);
            console.log(info);
            registerEvent(info);
        });
        $(document).on('click','#submit-nfs',function(e){
            e.preventDefault();
            var info = { event: "nfs", email:$("#email-nfs").val() }
            info = JSON.stringify(info);
            console.log(info);
            registerEvent(info);
        });
        $(document).on('click','#submit-fifa',function(e){
            e.preventDefault();
            var info = { event: "fifa", email:$("#email-fifa").val() }
            info = JSON.stringify(info);
            console.log(info);
            registerEvent(info);
        });
});

var registerEvent = function(info){
    $.ajax({
        url:"RegisterEvents.php",
        type:"post",
        data:info,
        async:true,
        success:function(response){
            //alert(response);
            //console.log(response);
            if(jsondata.msg){
                $("#text-msg").html(jsondata.msg);
            }else{
                $("#text-msg").html(jsondata.err);
            }
            $("#modal-msg").modal('toggle');
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
