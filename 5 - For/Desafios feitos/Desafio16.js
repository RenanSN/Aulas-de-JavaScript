//Declarando a variavel
var i;
var medias=new Array();
var qtd;
//Perguntando a qtd
qtd=eval(prompt("Quantos alunos você quer avaliar?","Digite aqui..."));
//Utilizando o For para receber os itens
for(i=0; i<qtd; i++){
    medias[i]=(prompt("Digite a média do aluno "+eval(i+1),"Digite aqui..."));
}
document.write("A situação dos alunos é:<br>");
//Utilizando o For para exibir os itens
for(i=0; i<qtd; i++){
    if(medias[i]>=7){
        document.write("Aluno " +eval(i+1)+": Aprovado!<br>");
    }else{
        document.write("Aluno " +eval(i+1)+": Reprovado!<br>");
    }
}