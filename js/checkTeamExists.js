var spanIcon='',spanErr='';
$(document).ready(function (e) {
    $(document).on('change','#quiz-team-name',function (e) {

    });
    $(document).on('blur', '#quiz-team-name', function (e) {
        getSpanID('quiz-team-name');
        cleanStuffs();
        checkTeamName(JSON.stringify({teamName: $('#quiz-team-name').val()}));
    });
    $(document).on('blur', '#hunt-team-name', function (e) {

        checkTeamName(JSON.stringify({teamName: $('#hunt-team-name').val()}));
    });
    $(document).on('blur', '#csgo-team-name', function (e) {
        checkTeamName(JSON.stringify({teamName: $('#csgo-team-name').val()}));
    });
    $(document).on('blur', '#cod-team-name', function (e) {
        checkTeamName(JSON.stringify({teamName: $('#cod-team-name').val()}));
    });
    $(document).on('blur', '#launch-team-name', function (e) {
        checkTeamName(JSON.stringify({teamName: $('#launch-team-name').val()}));
    });
    $(document).on('blur', '#homepage-team-name', function (e) {
        checkTeamName(JSON.stringify({teamName: $('#homepage-team-name').val()}));
    });
});
var cleanStuffs=function(){
    $('#'+spanIcon).removeClass('fa fa-circle-o-notch fa-spin fa-check fa-close');
    $('#'+spanErr).html('');
};
var getSpanID=function(id){
    switch (id){
        case 'quiz-team-name':spanIcon='span-quiz-team'; spanErr='span-err-quiz-team';break;
    }
};
var checkTeamName = function (info) {

    $.ajax({
        url: "CheckTeamNameExists.php",
        type: "post",
        data: info,
        async: true,
        success: function (response) {
            // alert(response);
            $('#'+spanIcon).removeClass('fa fa-circle-o-notch fa-spin');
            console.log(response);
            jsondata = $.parseJSON(response);
            if (jsondata.result === 0) {
                $('#'+spanIcon).addClass('fa fa-check');
            } else {
                $('#'+spanIcon).addClass('fa fa-close');
            }
        },
        error: function (response, status, errorThrown) {
            console.log(response + status);
            alert(response); //result from server if error occured
            alert(errorThrown);  //error code
        },
        progress:function () {
                $('#'+spanIcon).addClass('fa fa-circle-o-notch fa-spin');
        },
        cache: false,
        contentType: false,
        processData: false
    });
};