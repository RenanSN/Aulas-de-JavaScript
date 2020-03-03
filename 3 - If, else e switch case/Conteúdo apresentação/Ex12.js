//Declarando a variavel
var energia=60;
var velocidade;
//Utilidade If com E e OU
if ((energia > 80) && (energia <= 100)){
    document.write("Energia Alta!");
    velocidade=100;
}else if ((energia > 60) && (energia <= 81)){
    document.write("Energia Boa!");
    velocidade=80;
}else if ((energia > 40) && (energia <= 61)){
    document.write("Energia Média!");
    velocidade=60;
}else if ((energia > 20) && (energia <= 41)){
    document.write("Energia Baixa!");
    velocidade=40;
}else if ((energia > 1) && (energia <= 21)){
    document.write("Energia Critica!");
    velocidade=20;
}else{
    document.write("Você esta morto!");
    velocidade=0;
}