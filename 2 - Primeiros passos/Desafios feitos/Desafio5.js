//Declarando variável
var salario;
var porcent;
var valAumento;
var novoSalario;
//Obtendo dados através do prompt
salario=prompt("Olá, irei calcular o seu aumento! Digite o valor do seu salário:");
porcent=prompt("Agora digite a porcentagem de aumento:");
//Fazer conta convertendo string adquirida em valor
valAumento=eval(salario)*eval(porcent);
novoSalario=eval(salario)+valAumento;
//Escrevendo informação obtida no documento
document.write("Valor do aumento: R$ " + valAumento + "<br>");
document.write("Novo salário: R$ " + novoSalario);