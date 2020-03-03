//Declarando variável
var num1;
var num2;
var result;
//Obtendo dados através do prompt
num1=prompt("Por favor digite um número");
num2=prompt("Agora digite outro número");
//Fazer conta convertendo string adquirida em valor
result=eval(num1)+eval(num2);
//Escrevendo informação obtida no documento
document.write("A soma dos números é " + result);