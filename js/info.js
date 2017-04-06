$(document).ready(function () {

    $(document).on('click','#submit-info',function(e){
            e.preventDefault();
            alert('ehllo');
            for(var i=0;i<3;i++){
                $('#detail-info').append('<p class="card-text  text-center">T-Shirt : <span>Text on Black</span></p>')
            }
    });
});
