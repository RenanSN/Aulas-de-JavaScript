$("document").ready(function(){
    $("#bloco").mouseenter(function(){
        $("p").text("Mouse foi posicionado sobre a div");
    }) .mouseleave(function(){
        $("p").text("Mouse saiu de cima da div");
    });
});