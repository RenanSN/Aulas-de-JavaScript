$(document).ready(function(){//Testa se o documento está pronto
    $("#btCalc").click(function(){//Cria uma função caso o usuario clique no botão
        var n1=parseInt($("#Nota1").val());//Atribui o valor do input na variavel
        var n2=parseInt($("#Nota2").val());//Atribui o valor do input na variavel
        var media=(n1+n2)/2;//Calcula a média
        $("#fResult").val(media);//Exibe o resultado no form
    });
});