//Declarando a variavel
var t, n1, n2, r;
//Obtendo dados atraves do prompt
t=eval (prompt("Digite o numero da operação que deseja \n 1-Soma \n 2-Subtração \n 3-Multiplicação \n 4-Divisão"));
n1=eval (prompt("Digite a primeiro numero:"));
n2=eval (prompt("Digite a segundo numero:"));
//Utilizando Switch case
switch(t){
    case 1:
        r=n1+n2
        document.write("A Soma desses numeros da: ",r);
        break;
    case 2:
        r=n1-n2
        document.write("A Subtração desses numeros da: ",r);
        break;
    case 3:
        r=n1*n2
        document.write("A Multiplicação desses numeros da: ",r);
        break;
    case 4:
        r=n1/n2
        document.write("A Divisão desses numeros da: ",r);
        break;    
    default:
        document.write("Informação não aceita");
}