$("document").ready(function(){
    $("#bt1").click(function(){
        $("#caixa").animate ({width:"400px", height:"400px"});
    });
    $("#bt2").click(function(){
        $("#caixa").animate ({width:"100px"}).animate({height:"100px"});
    });
});