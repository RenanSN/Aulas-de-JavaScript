//Declarando a variavel
var i;
var materiais=new Array();
var qtd;
//Perguntando a qtd
qtd=eval(prompt("Quantos itens você quer comprar?","Digite aqui..."));
//Utilizando o For para receber os itens
for(i=0; i<qtd; i++){
    materiais[i]=(prompt("Digite o nome do item "+eval(i+1),"Digite aqui..."));
}
document.write("Os itens que você escolheu são:<br>");
//Utilizando o For para exibir os itens
for(i=0; i<qtd; i++){
    document.write(+eval(i+1)+"-"+materiais[i]+"<br>");
}