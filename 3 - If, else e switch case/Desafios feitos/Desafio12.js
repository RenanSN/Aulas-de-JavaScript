//Declarando as variaveis
var valor;
var tpPag;
var valorDesc;
var valorFinal;
//Recebendo os dados
valor = eval(prompt("Digite o valor da compra","Digite aqui..."));
tpPag = eval(prompt("Digite o nunero do tipo de pagamento \n1 – Dinheiro\n2 – Débito \n3 – Crédito \n4 – Crediário. ","Digite aqui..."));
//Utilizando Switch case
switch(tpPag){
case 1:
    valorDesc=0.20;
    break;
case 2:
    valorDesc=0.15;
    break;
case 3:
    valorDesc=0.10;
    break;
case 4:
    valorDesc=0.05;
    break;	
default:
    valorDesc=0.0;
}
//Fazendo o calculo
valorFinal = valor - (valor*valorDesc);
//Escrevendo na tela
document.write("Valor sem desconto: R$ "+valor);
document.write("<br>Forma de pagamento: "+tpPag);
document.write("<br>Porcentagem de desconto: "+(valorDesc*100)+"%");
document.write("<br>Valor a pagar: R$ "+valorFinal);