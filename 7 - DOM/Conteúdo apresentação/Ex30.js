//Definição da Função
function mudaTexto(texto,cor){
    //Criar a variavel paragrafo e atribui a ela o objeto p
    var paragrafo = document.getElementById("texto");
    paragrafo.innerHTML=texto;
    paragrafo.style.color = cor;
    paragrafo.style.fontFamily = 'Arial';
}