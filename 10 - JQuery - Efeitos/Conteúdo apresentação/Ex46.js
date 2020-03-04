$("document").ready(function(){
    $("#bt1").click(function(){
        $("#caixa").animate ({left:"400px", top:"400px"});
    });
    $("#bt2").click(function(){
        $("#caixa").animate ({left:"10px"}).animate({top:"50px"});
    });
});