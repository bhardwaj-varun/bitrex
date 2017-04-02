var reg_name=/[a-zA-Z .]/g
var reg_email=/^\w+([-+.'][^\s]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
var reg_phone=/[0-9]{10}/g;
var reg_address=/[a-zA-Z ,\-/]/g;
var reg_team=/[a-zA-Z0-9_ ]/g;
var reg_col_uni_course=/[a-zA-Z, .+]/g;
var validateName=function(text){
    var res=reg_name.test(text);
   // console.log(res);
    return res;
};
var validatePhone=function(text){
    var res=reg_phone.test(text);
   // console.log(res);
    return res;
};
var validateEmail=function(text){
    var res=reg_email.test(text);
    //console.log(res);
    return res;
};
var validateTeamName=function(text){
    var res=reg_team.test(text);
    //console.log(res);
    return res;
};
var validateAddress=function(text){
    var res=reg_address.test(text);
    //console.log(res);
    return res;
};
var ValidateCollege=function (text) {
    var res=reg_col_uni_course.test(text);
    //console.log(res);
    return res;
};
