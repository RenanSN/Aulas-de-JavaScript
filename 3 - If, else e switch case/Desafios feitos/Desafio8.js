//Declarando a variavel
var n1, n2, m;
//Obtendo dados atraves do prompt
n1=eval (prompt("Digite a primeira nota:"));
n2=eval (prompt("Digite a segunda nota:"));
//Fazendo o calculo
m=(n1+n2)/2;
//comando IF
if (m >= 7){
    document.write("Aprovado ",m);
}else if(m <= 5){ //Utilizando If dentro do Else
    document.write("Reprovado ",m);
}else{ //Comando Else
    document.write("Recuperação ",m);
}