//Declarando a variavel
var tab;
var limit;
var cont;
var rst;
//Obtendo os valores
tab=prompt("1ºNumero\nDigite o numero base da tabuada:","Digite aqui.")
limit=prompt("2ºNumero\nDigite o numero até onde vai sua tabuada:","Digite aqui.")
//Utilizando o While
cont =0;
while(cont<=limit){
rst=tab*cont;
    document.write(tab+" X "+cont+" = "+rst+"<br>");
    cont++;
}