//Declarando variável
var metros;
var result;
//Obtendo dados através do prompt
metros=prompt("Olá, irei converter seus metros em milímetros! Digite o primeiro número");
//Fazer conta convertendo string adquirida em valor
result=eval(metros)*1000;
//Escrevendo informação obtida no documento
document.write(metros + " metro(s) é igual a " + result + " milímetros!");