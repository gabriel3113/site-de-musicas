var input = document.getElementById("input_pesquisa");
var btn = document.getElementById("botao_pesquisa");
var erro = document.getElementById("erro");

function ignoreTexto(text, value) {

    var result = '';

    for (let l of text) {
        if (l != value) {
            result += l;
        }
    }

    return result;

}

var arry = ["adele", "teto", "thiaguinho","pericles","gusttavo lima","dj","hugo e guilherme","joao gomes"];


function reset() {

    document.querySelectorAll('body audio').forEach((audio) =>{
        audio.pause();
    })

    var divs = document.querySelectorAll("div");
    for (let i = 0; i < divs.length; i++) {
        divs[i].style.display = "none";

    }

}

function filtro(texto, filtro) {
    texto = texto.toLowerCase();
    filtro = filtro.toLowerCase();

    if (texto.substring(0, filtro.length) == filtro) {
        return true
    }

    return false;
}

function check() {
 
    reset();


    for (let id of arry) {
        document.querySelector('.principal').style.display = 'none';
        if (filtro(id,input.value)) {
            let teste = document.getElementById(ignoreTexto(id, ' '));
            teste.style.display = "block";
           return;

        }
    }

    erro.style.display = "block";
}

function ver_letra(cantor) {
    var letra = document.querySelector(`#${cantor} #letra`);
    letra.style.display = (letra.style.display === 'block' ? 'none' : 'block');
}
