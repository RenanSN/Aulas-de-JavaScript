//Declarando as variaveis
var num1;
var num2;
//Recebendo os dados
num1 = eval(prompt("Digite um primeiro número","Digite aqui..."));
num2 = eval(prompt("Digite um segundo número","Digite aqui..."));
//Utilizando If com Ou
if(num1>num2){
    document.write(num1 +" é maior do que " + num2 + "!!!");;
}else if(num2>num1){
    document.write(num2 +" é maior do que " + num1 + "!!!");
}else{
    document.write("Os dois números são iguais!!!");
}