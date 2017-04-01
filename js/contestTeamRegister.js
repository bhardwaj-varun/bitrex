$(document).ready(function (e) {
    $(document).on('click', '#submit-quiz', function (e) {
        e.preventDefault();
        var info = {
            eventName: "quiz",
            teamName: $('#quiz-team-name').val(),
            noOfParticipants: 2,
            emails: [
                {email: $("#quiz-email-1").val()},
                {email: $("#quiz-email-2").val()}
            ]
        };
        info = JSON.stringify(info);
        console.log(info);
        //registerTeamEvent(info);
    });
    $(document).on('click', '#submit-hunt', function (e) {
        e.preventDefault();
        var info = {
            eventName: "hunt",
            teamName: $('#hunt-team-name').val(),
            noOfParticipants: 2,
            emails: [
                {email: $("#hunt-email-1").val()},
                {email: $("#hunt-email-2").val()}
            ]
        };
        info = JSON.stringify(info);
        console.log(info);
    });
    $(document).on('click', '#submit-csgo', function (e) {
        e.preventDefault();
        var noOfParticipants = 5;
        var info = {
            eventName: "csgo",
            teamName: $('#csgo-team-name').val(),
            noOfParticipants: noOfParticipants,
            emails: [
            ]
        };
        for (var i = 1; i <= noOfParticipants; i++)
            info.emails.push({email: $('#csgo-email-' + i).val()});
        info = JSON.stringify(info);
        console.log(info);
    });
    $(document).on('click', '#submit-cod', function (e) {
        e.preventDefault();
        var noOfParticipants = 6;
        var info = {
            eventName: "cod",
            teamName: $('#cod-team-name').val(),
            noOfParticipants: noOfParticipants,
            emails: [
            ]
        };
        for (var i = 1; i <= noOfParticipants; i++)
            info.emails.push({email: $('#cod-email-' + i).val()});
        info = JSON.stringify(info);
        console.log(info);
    });
    $(document).on('click', '#submit-homepage', function (e) {
        e.preventDefault();
        var noOfParticipants = $("#homepage-form-div").find($("input")).length - 1;
        var info = {
            eventName: "homepage",
            teamName: $('#homepage-team-name').val(),
            noOfParticipants: noOfParticipants,
            emails: [
            ]
        };
        for (var i = 1; i <= noOfParticipants; i++)
            info.emails.push({email: $('#homepage-email-' + i).val()});
        info = JSON.stringify(info);
        console.log(info);
    });
    $(document).on('click', '#submit-launch', function (e) {
        e.preventDefault();
        var noOfParticipants = $("#launch-form-div").find($("input")).length - 1;
        var info = {
            eventName: "launchpad",
            teamName: $('#launch-team-name').val(),
            noOfParticipants: noOfParticipants,
            emails: [
            ]
        };
        for (var i = 1; i <= noOfParticipants; i++)
            info.emails.push({email: $('#launch-email-' + i).val()});
        info = JSON.stringify(info);
        console.log(info);
    });


});

var registerTeamEvent = function (info) {
    $.ajax({
        url: "RegisterTeamEvents.php",
        type: "post",
        data: info,
        async: true,
        success: function (response) {
            //console.log(response);
            jsondata=$.parseJSON(response);
             if(jsondata.msg){
                 $("#text-msg").html(jsondata.msg);
             }else{
                 $("#text-msg").html(jsondata.err);
             }
            $("#modal-msg").modal('toggle');
        },
        error: function (response, status, errorThrown) {
            console.log(response + status);
            alert(response); //result from server if error occured
            alert(errorThrown);  //error code
        },
        progress:function(e){
        },
        cache: false,
        contentType: false,
        processData: false
    });
};



