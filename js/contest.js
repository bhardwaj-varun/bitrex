var cArray = ["#algoholics", "#quriosity", "#scavengers", "#hack", "#homepage", "#ninja", "#launchpad", "#gaming"];
var chk = 0
$("a").click(function () {
    var flag = 0
    for (var i = cArray.length - 1; i >= 0; i--) {
        if (cArray[i] === ("#" + this.id)) {
            var url = 'contest.html?conid=' + cArray[i] + '&id=' + i;
            flag = 1;
            break;
        }

    }
    if (flag == 1) {
        window.location = url;
    }
    x = i + 1;

});

function onloadFunc() {
    var url = document.location.href;

    var params = url.split('?')[1];
    console.log(params);
    if (params === undefined || params === '') {
        $("#1").addClass('active');
        $('#algoholics').addClass('active');
    } else {
        params = params.split('&');
        var data = {}, tmp, x, y;
        for (var i = 0, l = params.length; i < l; i++) {
            tmp = params[i].split('=');
            x = tmp[0];
            data[tmp[0]] = tmp[1];
        }
        if (data) {
            var z = Number(data.id) + 1;
            var y = "#" + z;
            $(y).addClass('active');
            $(data.conid).addClass('active');
        }
    }

}



var l_info = 1;
function l_add_fields() {
    if (l_info >= 5) {
        $("#l_more_fields").hide();
    } else {
        $("#l_less_fields").show();
        var objTo = document.getElementById('l_additionalFields');
        var divtest = document.createElement("div");
        var x = l_info + 1;
        divtest.innerHTML = '<div  class="row l-warn"><div class="col-8 offset-2"><span id="span-launch-email'+ x +'-warn"  style="color:red; font-size: 12px; padding-bottom: 8px;"></span></div></div><div class="form-group row l" style="margin-top: 20px;"><label for="launch-email-' + x + '" class="col-2 col-form-label">Participant ' + x + '</label><div class="col-10"><input class="form-control" type="text" placeholder="Email ID" id="launch-email-' + x + '"></div></div>';
        console.log(divtest.innerHTML)
        objTo.appendChild(divtest);
        l_info++;
        if (l_info >= 5) {
            $("#l_more_fields").hide();
        }
    }
}
function l_remove_fields() {
    if (l_info == 1) {
        $("#l_less_fields").hide();

    } else {
        $("#l_more_fields").show();
        $('div.l:last').remove();
        $('div.l-warn:last').remove();
        l_info--;
        if (l_info == 1) {
            $("#l_less_fields").hide();

        }
    }

}
var info = 1;
function add_fields() {
    if (info >= 3) {
        $("#more_fields").hide();
    } else {
        $("#less_fields").show();
        var objTo = document.getElementById('additionalFields');
        var divtest = document.createElement("div");
        var x = info + 1;
        divtest.innerHTML = '<div class="row p-warn"><div class="col-8 offset-2"><span id="span-homepage-email'+ x +'-warn" style="color:red; font-size: 12px; padding-bottom: 8px;"></span></div></div><div class="form-group row p" style="margin-top: 20px;"><label for="homepage-email-' + x + '" class="col-2 col-form-label">Participant ' + x + '</label><div class="col-10"><input class="form-control" type="text" placeholder="Email ID" id="homepage-email-' + x + '"></div></div>';
        console.log(divtest.innerHTML);
        objTo.appendChild(divtest);
        info++;
        if (info >= 3) {
            $("#more_fields").hide();

        }
    }
}
function remove_fields() {
    if (info == 1) {
        $("#less_fields").hide();
    } else {
        $("#more_fields").show();
        $('div.p:last').remove();
        $('div.p-warn:last').remove();
        info--;
        if (info == 1) {
            $("#less_fields").hide();

        }
    }

}







