//Declarando a variavel
var cont;
document.write("<h3>Numeros pares do 0 ao 100...</h3>");
//Utilizando o While
cont =0;
while(cont<=100){
    if(cont%2==0){
        document.write(cont+"<br>");
    }
    cont++;	
}