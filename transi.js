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
            $('.tee-sent').css({justifyContent:'space-between'});
        });
        if (height >= 600){
            $('#text-2').animate({ 'opacity': 1}, "slow");
            $('#text-2').animate({ 'opacity': 1}, "slow");
        }
        if (height >= 1000){
            $('#text-3').animate({ 'opacity': 1}, "slow");
        }
        if (height >= 1400){

            $('#screen1').css({
                'position':'static',
                'padding':20+'vh '+0
            }),"slow";
            
            if (firstTest){
                $('html,body').animate({scrollTop: 0});
                firstTest = false;
            }
            $('#screen2').animate({ 'margin-top': 0}, "slow");
        }
    }
});

$('#scroll button').click(function(){
    $('html,body').animate({scrollTop: 200});
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



