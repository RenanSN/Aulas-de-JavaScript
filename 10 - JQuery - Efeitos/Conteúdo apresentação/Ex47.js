$("document").ready(function(){
    $("#bt1").click(function(){
        $("#imagem").animate ({width:"400px", height:"400px"});
    });
    $("#bt2").click(function(){
        $("#imagem").animate ({width:"100px"}).animate({height:"100px"});
    });
});