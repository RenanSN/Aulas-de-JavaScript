$(document).ready(function(){//Testa se o documento está pronto
    $( "#escuro" ).click(function() {//Fun??o executada ao clicar no obj com id "escuro"
        $("#corpo").css({backgroundColor:"black", color:"white", fontFamily:"Algerian"});//Altera o estilo
    });
    $( "#claro" ).click(function() {//Fun??o executada ao clicar no obj com id "claro"
        $("#corpo").css({backgroundColor:"white", color:"black", fontFamily:"Gigi"});//Altera o estilo
    });
});