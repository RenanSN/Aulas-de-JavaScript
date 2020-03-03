$(document).ready(function(){//Testa se o documento está pronto
    $("#btSoma").click(function(){//Cria uma função caso o usuario clique no botão Somar
        var v1=parseInt($("#f_v1").val());//Atribui o valor do input na variavel
        var v2=parseInt($("#f_v2").val());//Atribui o valor do input na variavel
        var result=v1+v2;//Soma os valores
        $("#fResult").val(result);//Exibe o resultado no form
    });
});