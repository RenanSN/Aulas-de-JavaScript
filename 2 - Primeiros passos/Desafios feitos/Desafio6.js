//Declarando a variavel
var preco;
var porcentagem;
var desconto;
var novopreco;
//Obtendo dados atraves do prompt
preco=prompt("Por favor digite o preço do produto: ","Digite aqui");
porcentagem=prompt("Por favor digite a porcentagem de desconto: ","0.05 = 5%   0.10 = 10%   0.15 = 15% ... ");
//Realizando os calculos
desconto = preco * porcentagem;
novopreco = eval(preco) - eval(desconto);
//Escrevendo a informção obtida no documento
document.write("O valor do desconto é R$ "+desconto+"!!!<br>");
document.write("O preço com desconto é R$ "+novopreco+"!!!");