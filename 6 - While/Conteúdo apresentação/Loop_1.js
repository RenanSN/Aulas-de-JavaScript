//Declrando a variavel
var total=0.0;
var op=0;
//Loop Infinito com while
do{
    op=parseFloat(prompt("Digite o preço do produto ou 0 (zero) para sair"));
    total=total+op;
}while(op!=0);
document.write("O total de compra foi R$ "+total);