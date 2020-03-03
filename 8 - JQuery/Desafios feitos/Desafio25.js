$(document).ready(function(){//Testa se o documento está pronto
    $("#btSoma").click(function(){//Cria uma função caso o usuario clique no botão Somar
        var v1=parseInt($("#f_v1").val());//Atribui o valor do input na variavel
        var v2=parseInt($("#f_v2").val());//Atribui o valor do input na variavel
        var result=v1+v2;//Soma os valores
        $("#fResult").val(result);//Exibe o resultado no form
    });
    
    $("#btSub").click(function(){//Cria uma função caso o usuario clique no botão Subtrair
        var v1=parseInt($("#f_v1").val());//Atribui o valor do input na variavel
        var v2=parseInt($("#f_v2").val());//Atribui o valor do input na variavel
        var result=v1-v2;//Subtrai os valores
        $("#fResult").val(result);//Exibe o resultado no form
    });
    
    $("#btMult").click(function(){//Cria uma função caso o usuario clique no botão Multiplicar
        var v1=parseInt($("#f_v1").val());//Atribui o valor do input na variavel
        var v2=parseInt($("#f_v2").val());//Atribui o valor do input na variavel
        var result=v1*v2;//Multiplica os valores
        $("#fResult").val(result);//Exibe o resultado no form
    });
    
    $("#btDiv").click(function(){//Cria uma função caso o usuario clique no botão Dividir
        var v1=parseInt($("#f_v1").val());//Atribui o valor do input na variavel
        var v2=parseInt($("#f_v2").val());//Atribui o valor do input na variavel
        if(v2==0){//Se o segundo valor for 0
            var result="Não existe divisão por zero!";//Resultado recebe esta frase
        }else{
            var result=v1/v2;//Divide os valores
        }
        $("#fResult").val(result);//Exibe o resultado no form
    });
});