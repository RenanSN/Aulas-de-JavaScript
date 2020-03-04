$(document).ready(function(){//Testa se o documento está pronto
    $("#btCalc").click(function(){//Cria uma função caso o usuario clique no botão
        var nome=$("#nome").val();//Atribui o valor do input na variavel
        var n1=parseFloat($("#nota1").val());//Atribui o valor do input na variavel
        var n2=parseFloat($("#nota2").val());//Atribui o valor do input na variavel
        var n3=parseFloat($("#nota3").val());//Atribui o valor do input na variavel
        var n4=parseFloat($("#nota4").val());//Atribui o valor do input na variavel
        var media=(n1+n2+n3+n4)/4;//Calcula a media
        if(media>=7){
            aprovado(nome,media);	
        }else{
            if(media<5){
                reprovado(nome,media);
            }else{
                recuperacao(nome,media);
            }
        }
    });
    function aprovado(nome,media){
        esconde();
        $("#aprovado").text(nome+" parabens!!! Você está aprovado, pois sua média foi "+media+"!!!");
        $("#aprovado").fadeIn(1200);
    };
    function reprovado(nome,media){
        esconde();
        $("#reprovado").text(nome+" poxa vida!!! Você está reprovado, pois sua média foi "+media+"!!!");
        $("#reprovado").fadeIn(1200);
    };
    function recuperacao(nome,media){
        esconde();
        $("#recuperacao").text(nome+" atenção!!! Você está de recuperação, pois sua média foi "+media+"!!!");
        $("#recuperacao").fadeIn(1200);
    };
    function esconde(){
        $("#aprovado").hide();
        $("#reprovado").hide();
        $("#recuperacao").hide();
    };
    $("#btReset").click(function(){
        esconde();
    });
});