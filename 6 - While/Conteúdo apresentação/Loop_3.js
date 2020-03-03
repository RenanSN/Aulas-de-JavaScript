//Declrando a variavel
var total=0.0;
var op=0;
var cont=0;
//Loop Infinito com while
do{
    op=(prompt("Digite a nota do Aluno ou fim para sair"));
    if(op!="fim"){
        total=total+eval(op);
        cont++;
    }
}
while(op!="fim");
media=total/cont;
document.write("A média do aluno foi: "+media);