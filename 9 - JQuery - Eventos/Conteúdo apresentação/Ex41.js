$("document").ready(function(){
    $("#txt").keyup(function(){
        $("#p1").text($("#txt").val());
        $("#p2").text("");
    }) .keydown(function(){
        $("#p2").text("tecla pressionada");
    });
});