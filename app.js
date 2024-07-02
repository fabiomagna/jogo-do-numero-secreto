let numerosSorteados = []
let numeroLimite = 10
function iniciar(){
    tentativas = 1
    numeroSecreto = gerarNumeroAleatorio()
    exibirTextoNaTela('h1', 'Jogo do número secreto')
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10')
    document.getElementById('reiniciar').setAttribute('disabled',true)
    limparCampo()
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = numerosSorteados.length;
    if (quantidadeDeElementosNaLista == numeroLimite){
        numerosSorteados = []
    }
    if (numerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio
    }else {
        numerosSorteados.push(numeroEscolhido)
        console.log(numerosSorteados)
        return numeroEscolhido
    }
}

function verificarChute(){
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou')
        let textoTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
        exibirTextoNaTela('p',`Parabéns você descobriu o número secreto com ${tentativas} ${textoTentativa}!`)
        document.getElementById('reiniciar').removeAttribute('disabled')
    }else {
        if (chute > numeroSecreto){
        exibirTextoNaTela('p',`O número secreto é menor que ${chute}`)
    } else{
        exibirTextoNaTela('p',`O número secreto é maior que ${chute}`)
    }
    }
    tentativas++
    limparCampo()
}

function limparCampo(){
    document.querySelector('input').value = ''
}

function novoJogo(){
    iniciar()
}

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female',{rate:1.2})
}

let numeroSecreto = null
let tentativas = null

iniciar()
