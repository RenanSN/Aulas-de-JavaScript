$(document).ready(function(){//Função executada apos carregar o documento
    $("#bt1").click(function(){//Função exec qnd o user clica no bt1
        $("#caixa").slideUp(1000);//Esconde a caixa em 1 segundo
    });
    $("#bt2").click(function(){
        $("#caixa").slideDown(1000);//Exibe a caixa em 1 segundo
    });
});