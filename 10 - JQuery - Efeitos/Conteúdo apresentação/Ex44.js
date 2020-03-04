$("document").ready(function(){
    $("#bt1").click(function(){
        $("div").show(1000, msg);
    });
    $("#bt2").click(function(){
        $("div").hide(1000, msg);
    });
    function msg(){
        alert("Efeito terminado");
    }
});