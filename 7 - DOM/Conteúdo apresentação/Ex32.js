//Definição da Função
function confirma(){
    //Atribui os dados do form na variavel tag
    var tag=document.forms["curso"];
    //Atribui o valor do text fNome na variavel nome
    var nome=tag.elements["fNome"].value;
    var senha=tag.elements["fSenha"].value;
    alert("Obrigado "+nome+" !!!\nSeus dados foram gravados!\nSua senha é "+ senha);
}