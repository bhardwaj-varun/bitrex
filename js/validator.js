var reg_name=/[a-zA-Z .]/g;
var reg_email=/^\w+([-+.'][^\s]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
var reg_phone=/^([987]{1}[0-9]{9})/g;
var reg_address=/[a-zA-Z ,\-/]/g;
var reg_team=/[a-zA-Z0-9_ ]/g;
var reg_col_uni_course=/[a-zA-Z, .+]/g;
var validateName=function(text){
    console.log(reg_name.test(text));
    return reg_name.test(text);
};
var validatePhone=function(text){
    console.log(reg_phone.test(text));
    return reg_phone.test(text);
};
var validateEmail=function(text){
    console.log(reg_email.test(text));
    return reg_email.test(text);
};
var validateTeamName=function(text){
    console.log(reg_team.test(text));
    return reg_team.test(text);
};
var validateAddress=function(text){
    console.log(reg_address.test(text));
    return reg_address.test(text);
};
var ValidateCollege=function (text) {
    console.log(reg_col_uni_course.test(text));
    return reg_col_uni_course.test(text);
};