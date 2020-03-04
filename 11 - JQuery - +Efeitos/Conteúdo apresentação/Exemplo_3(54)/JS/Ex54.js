$(document).ready(function(){	
	$("#slider li:first").fadeIn(2000);
	window.setInterval("carrossel()",4000);
});	
function carrossel(){
	var ativo = $("#slider .ativo");
	if ($(ativo.next()).length){
		var proximo = ativo.next();
	}else{
		var proximo = $("#slider li:first");
	}
	proximo.addClass("ativo").fadeIn(2000);
	ativo.removeClass("ativo").fadeOut(2000);
}