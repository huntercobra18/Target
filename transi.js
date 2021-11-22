//loading screen
window.addEventListener("load", function() {
    console.log("page load");
    $("#loading-screen").fadeOut(2000,function () {
        $("#content").fadeIn(1000);
    });
  });

var firstTest = true;
  
$(window).scroll(function() {
    const height = $(window).scrollTop();
    if (height >= 200){
        $('#scroll').animate({ 'opacity': 0}, "slow", function(){
            $('#scroll').css({display:'none'});
            $('.tee-sent').css({display:'flex'});
            $('#text-1').animate({ 'opacity': 1}, "slow");
        });
        if (height >= 600){
            $('#text-2').animate({ 'opacity': 1}, "slow");
        }
        if (height >= 1000){
            $('#text-3').animate({ 'opacity': 1}, "slow");
        }
        if (height >= 1400){
            $('.tee-sent').animate({ 'opacity': 0}, "slow");
            $('#tee').animate({ 'opacity': 0}, "slow",function(){
                if (firstTest){
                    $('html,body').animate({scrollTop: 0}, 'slow');
                    firstTest = false;
                }
                $('#screen1').animate({ 'width': 0}, "slow");
                $('#screen2').animate({ 'margin-top': 0}, "slow",function(){
                    $('#screen1').css({display:'none'});
                });
            });
        }
    }
});

// slider

var slide = new Array( "img/droite.png","img/face.png", "img/gauche.png");
var numero = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide").src = slide[numero];
}
setTimeout("ChangeSlide(1)", 4000);



