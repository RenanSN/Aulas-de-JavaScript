$(document).ready(function(){
    $("img").hover(function(){//Cria a função a ser executada quando o cursor entra no elemento com a tag bloco
        $(this).clearQueue().animate({//Aplica o animate na imagem que o mouse esta sobre 
            width:"400px",
            height:"400px"
        },400);
    }).mouseleave(function(){
        $(this).animate({//Aplica o animate na imagem que o mouse acabou de deixar
            width:"300px",
            height:"300px"
        },400);
    });
});