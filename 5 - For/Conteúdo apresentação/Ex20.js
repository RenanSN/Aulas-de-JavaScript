//Declarando  o Vetor
var i;
var tabuada = (prompt("digite um numero: ",""));
var resultado;
//Utilizando o For

for(i=1; i<11; i++){
    resultado=i*tabuada;
    document.write(tabuada + "X" + i + "=" + resultado + "<br>");
}