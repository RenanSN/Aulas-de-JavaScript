$(document).ready(function(){//Testa se o documento está pronto
    $("#btSoma").click(function(){//Cria uma função caso o usuario clique no botão
        var n1=parseInt($("#num1").val());//Atribui o valor do input na variavel
        var n2=parseInt($("#num2").val());//Atribui o valor do input na variavel
        var soma=(n1+n2);//Calcula a soma
        $("#resultado").text("Resultado da soma: "+soma+"!!!");//Exibe o resultado
        $("#resultado").fadeIn(1000);
    });
});