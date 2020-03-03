function soma(){
	var valor1=document.getElementById("f_V1").value;
	var valor2=document.getElementById("f_V2").value;
	var somar=parseInt(valor1)+parseInt(valor2);
	var rst = somar;
	document.getElementById("resultado").innerHTML=rst;
};