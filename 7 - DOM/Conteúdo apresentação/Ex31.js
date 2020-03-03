//Definição da Função
function mudaCor(cor){
    //Criar a variavel tagP e atribui a ela um vetor com todas tags p
    var tagP = document.getElementsByTagName("p");
    //Utiliza o for para percorrer o vetor de tags p
    for(var i=0; i<tagP.length; i++){
        tagP[i].style.color = cor;
    }
}