//Declrando a variavel
var total=0.0;
var op=0;
var cont=0;
var media=0;
//Loop Infinito com while
do{
    op=parseFloat(prompt("Digite a nota do Aluno ou 0 (zero) para sair"));
    total=total+op;
    cont++;
}while(op!=0);
media=total/cont;
document.write("A média do aluno é "+media);