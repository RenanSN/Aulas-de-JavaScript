//Declarando  o Vetor
var notas=new Array;
var media;
//Atribuindo valores
notas[0]=eval(prompt("Digite a primeira nota","Digite aqui..."));
notas[1]=eval(prompt("Digite a segunda nota","Digite aqui..."));
notas[2]=eval(prompt("Digite a terceira nota","Digite aqui..."));
notas[3]=eval(prompt("Digite a quarta nota","Digite aqui..."));
//Clacular a média
media = (notas[0]+notas[1]+notas[2]+notas[3])/4;
//Escrevendo no Documento
document.write("Nota 1: "+notas[0]+"<br>");
document.write("Nota 2: "+notas[1]+"<br>");
document.write("Nota 3: "+notas[2]+"<br>");
document.write("Nota 4: "+notas[3]+"<br>");
document.write("Média "+media+"<br>");