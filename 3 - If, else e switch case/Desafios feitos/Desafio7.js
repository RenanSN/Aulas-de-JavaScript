//Declarando a variavel
var idade;
//Obtendo dados atraves do prompt
idade=eval (prompt("Quantos anos você tem ?","(digite sua idade)"));
//comando IF
if (idade >= 18){
    document.write("Entrada permitida");
}else{ //Comando Else
    document.write("Entrada proibida");
}