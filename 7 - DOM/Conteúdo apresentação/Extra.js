//Definição da Função
function calcular(){
    var tag=document.forms["curso"];
    var nome=tag.elements["fNome"].value;
    var nota1 = tag.elements["fNota1"].value;
    var nota2 = tag.elements["fNota2"].value;
    var nota3 = tag.elements["fNota3"].value;
    var nota4 = tag.elements["fNota4"].value;
    /*Calculando a média*/
    var media = (eval(nota1)+eval(nota2)+eval(nota3)+eval(nota4))/4;
    tag.elements["fMedia"].value = media;
}