$(document).ready(function(){//Testa se o documento está pronto
    $("#btCalc").click(function(){//Cria uma função caso o usuario clique no botão
        var n1=parseInt($("#Nota1").val());//Atribui o valor do input na variavel
        var n2=parseInt($("#Nota2").val());//Atribui o valor do input na variavel
        var media=(n1+n2)/2;//Calcula a média
        $("#fResult").val(media);//Exibe o resultado no form
        if(media>=7){//Se a média for maior ou igual a 7
            situac="Aprovado"; //situac recebe Aprovado
            $("#fSituac").css({color:"#006400"});
            $("#fResult").css({color:"#006400"});
        }else if(media<5){//Senão se a média for menor que 5
            situac="Reprovado";//situac recebe Aprovado
            $("#fSituac").css({color:"#FF0000"});
            $("#fResult").css({color:"FF0000"});
        }else{//Senão
            situac="Rcuperação";//situac recebe Aprovado
            $("#fSituac").css({color:"#FFA500"});
            $("#fResult").css({color:"#FFA500"});
        }
        $("#fSituac").val(situac);//Exibe o resultado no form
    });
});