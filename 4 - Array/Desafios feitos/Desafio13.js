//Declarando o vetor
var precos=new Array();
var total;
//Atribuindo valores
precos[0]=eval(prompt("Digite o preço do produto 1: ","Digite aqui..."));
precos[1]=eval(prompt("Digite o preço do produto 2: ","Digite aqui..."));
precos[2]=eval(prompt("Digite o preço do produto 3: ","Digite aqui..."));
precos[3]=eval(prompt("Digite o preço do produto 4: ","Digite aqui..."));
precos[4]=eval(prompt("Digite o preço do produto 5: ","Digite aqui..."));
//Calculando a média
total = precos[0]+precos[1]+precos[2]+precos[3]+precos[4];
//Escrevendo no Documento
document.write("Preço 1: R$ "+precos[0]+"<br>");
document.write("Preço 2: R$ "+precos[1]+"<br>");
document.write("Preço 3: R$ "+precos[2]+"<br>");
document.write("Preço 4: R$ "+precos[3]+"<br>");
document.write("Preço 5: R$ "+precos[3]+"<br>");
document.write("Total: R$ "+total.toFixed(2)+"<br>");