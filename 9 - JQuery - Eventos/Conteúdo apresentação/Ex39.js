$("document").ready(function(){
    $("#txt1").mousedown(function(){
        $("#txt2").text("Botão do mouse para BAIXO");
    }) .mouseup(function(){
        $("#txt2").text("Botão do mouse para CIMA");
    });
});