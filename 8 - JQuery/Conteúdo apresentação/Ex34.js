//JavaScript
    window.addEventListener("load",function(){//Testa se a janela foi carregada
        document.getElementById("btSomaJS").addEventListener("click",function(){//Cria uma função caso o usuario clique no botão Somar JS
            var v1=document.getElementById("f_v1").value;//Atribui o valor do input na variavel
            var v2=document.getElementById("f_v2").value;//Atribui o valor do input na variavel
            var soma=parseInt(v1)+parseInt(v2);//Soma os valores
            document.getElementById("res").innerHTML=soma;//Exibe o resultado no div
        });
    });
//JQuery	
    $(document).ready(function(){//Testa se o documento está pronto
        $("#btSomaJQ").click(function(){//Cria uma função caso o usuario clique no botão Somar JQ
            var v1=parseInt($("#f_v1").val());//Atribui o valor do input na variavel
            var v2=parseInt($("#f_v2").val());//Atribui o valor do input na variavel
            var soma=v1+v2;//Soma os valores
            $("#res").text(soma);//Exibe o resultado no div
        });
    });
