$("document").ready(function(){
    $("#bt1").click(function(){
        $("#imagem").delay(1000).fadeOut(1500);
    });
    $("#bt2").click(function(){
        $("#imagem").fadeIn(1500);
    });
});