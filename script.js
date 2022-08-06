/** Função onde clico no botão e insere o número no bloco de resultado/* (numero) é o paramentro ondigo que ta vindo um numero */
function insert(num) { 
   var  numero = document.getElementById('resultado').innerHTML;
   document.getElementById('resultado').innerHTML = numero + num;
}

function clean() {
    document.getElementById('resultado').innerHTML = '';
}

function back() {
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}
/** Se tiver número dentro do paragrafo pegar o numero do paragrafo eval e fazer os calculo */
function calcular() {
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado) {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
    else{
        document.getElementById('resultado').innerHTML = ''
    }
}