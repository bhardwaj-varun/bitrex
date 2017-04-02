var flagAlgo=0;
var flagNinja=0;
var flagHTS=0;
var flagNFS=0;
var flagFifa=0;
$(document).ready(function(e){
    validateContests();
        $(document).on('click','#submit-algoholic',function(e){
            e.preventDefault();
            var info = { event: "algoholics", email:$("#email-algoholic").val().trim() }
            info = JSON.stringify(info);
            console.log(info);
            if(flagAlgo)
                registerEvent(info);
        });
        $(document).on('click','#submit-code-ninja',function(e){
            e.preventDefault();
            var info = { event: "code_ninja", email:$("#email-code-ninja").val().trim() }
            info = JSON.stringify(info);
            console.log(info);
            if(flagNinja)
            registerEvent(info);
        });
        $(document).on('click','#submit-hts',function(e){
            e.preventDefault();
            var info = { event: "hts", email:$("#email-hts").val().trim() }
            info = JSON.stringify(info);
            console.log(info);
            if(flagHTS)
            registerEvent(info);
        });
        $(document).on('click','#submit-nfs',function(e){
            e.preventDefault();
            var info = { event: "nfs", email:$("#email-nfs").val().trim() }
            info = JSON.stringify(info);
            console.log(info);
            if(flagNFS)
            registerEvent(info);
        });
        $(document).on('click','#submit-fifa',function(e){
            e.preventDefault();
            var info = { event: "fifa", email:$("#email-fifa").val().trim() }
            info = JSON.stringify(info);
            console.log(info);
            if(flagFifa)
            registerEvent(info);
        });
});
var validateContests=function(){
    $(document).on('blur','#email-algoholic',function (e) {
        flagAlgo=1;
        var text=$('#email-algoholic').val().trim();
        var result=validateEmail(text);
        flagAlgo &= result ? 1:0;
       // alert(result+' '+flagAlgo);
        if(!result){
            $('#span-email-algoholic-warn').html('Invalid Email');
        }
        else{
            $('#span-email-algoholic-warn').html('');
        }
    });
    $(document).on('blur','#email-hts',function (e) {
        flagHTS=1;
        var text=$('#email-hts').val().trim();
        var result=validateEmail(text);
        flagHTS &= result ? 1:0;
        // alert(result+' '+flagAlgo);
        if(!result){
            $('#span-email-hts-warn').html('Invalid Email');
        }
        else{
            $('#span-email-hts-warn').html('');
        }
    });
    $(document).on('blur','#email-code-ninja',function (e) {
        flagNinja=1;
        var text=$('#email-code-ninja').val().trim();
        var result=validateEmail(text);
        flagNinja &= result ? 1:0;
        // alert(result+' '+flagAlgo);
        if(!result){
            $('#span-email-code-ninja-warn').html('Invalid Email');
        }
        else{
            $('#span-email-code-ninja-warn').html('');
        }
    });
    $(document).on('blur','#email-nfs',function (e) {
        flagNFS=1;
        var text=$('#email-nfs').val().trim();
        var result=validateEmail(text);
        flagNFS &= result ? 1:0;
        // alert(result+' '+flagAlgo);
        if(!result){
            $('#span-email-nfs-warn').html('Invalid Email');
        }
        else{
            $('#span-email-nfs-warn').html('');
        }
    });
    $(document).on('blur','#email-fifa',function (e) {
        flagFifa=1;
        var text=$('#email-fifa').val().trim();
        var result=validateEmail(text);
        flagFifa &= result ? 1:0;
        // alert(result+' '+flagAlgo);
        if(!result){
            $('#span-email-fifa-warn').html('Invalid Email');
        }
        else{
            $('#span-email-fifa-warn').html('');
        }
    });
};
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
                $("#text").html(jsondata.msg);
            }else{
                $("#text").html(jsondata.err);
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
