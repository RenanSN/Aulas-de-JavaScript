//Declarando  o Vetor
var mochila=new Array();
//Atribuindo valores
mochila[0]="corda";
mochila[1]="faca";
mochila[2]="arame";
mochila[3]="lanterna";
mochila[4]="pedra";
mochila[5]="arduino";
mochila[6]="cachorro";
mochila[7]="2º mochila";
//Utilizando alguns métodos
mochila.pop();//Remove o ultimo
mochila.push("3º mochila");//Adicionar "curativos"(qualquer texto) no final
mochila.sort();//Coloca em ordem cresente (Alfabética)
//Escrevendo no Documento
document.write(mochila[0]+"<br>");
document.write(mochila[1]+"<br>");
document.write(mochila[2]+"<br>");
document.write(mochila[3]+"<br>");
document.write(mochila[4]+"<br>");
document.write(mochila[5]+"<br>");
document.write(mochila[6]+"<br>");
document.write(mochila[7]+"<br>");