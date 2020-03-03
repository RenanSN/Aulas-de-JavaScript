function calcular(){
	var tag=document.forms["formu"];
	var nome=tag.elements["fNome"].value;
	var nota1=tag.elements["fNota1"].value;
	var nota2=tag.elements["fNota2"].value;
	/*Calculando a Média*/
	var media=(eval(nota1)+eval(nota2))/2;
	if (media>=7){
		sit="Aprovado";
	}else if(media<=5){
		sit="Reprovado";
	}else{
		sit="Recuperação";
	}
	tag.elements["fMedia"].value = media;
	/*Resultado*/
	var sit;
	tag.elements["fSit"].value = sit;
}