//Declarando a variavel
var total=0.0;
var op=0;
var cont=0;
var produto = new Array();
var preco = new Array();
//Loop Infinito com While
do{
    op=prompt("Digite o nome do produto ou fim para sair:","Digite aqui.");
    if(op!="fim"){
        produto[cont]=op;
        preco[cont]=parseFloat(prompt("Digite o preço do produto:","Digite aqui."));
        cont++;
    }	
}while(op!="fim");
for(i=0;i<produto.length;i++){
    document.write(produto[i]+": R$ "+preco[i].toFixed(2)+"<br>");//.toFixed(2)deixara duas casas deciamais
    total += preco[i] 
}
document.write("Valor total: R$ " +total.toFixed(2));