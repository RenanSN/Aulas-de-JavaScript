$(document).ready(function(){
    $("img").fadeTo(500,0.3);
    $("img").mouseenter(function(){//Cria a função a ser executada quando o cursor entra no elemento de imagem
        $(this).clearQueue().fadeTo(500,1);//Aplica o fadeTo 100% na imagem que o mouse esta sobre 
    }).mouseleave(function(){
        $(this).fadeTo(500,0.4);//Aplica o fadeTo 40% na imagem que o mouse acabou de deixar
    });
});