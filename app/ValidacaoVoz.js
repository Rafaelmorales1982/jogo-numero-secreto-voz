function verificaChuteValido(chute) {
  //transformando o valor da voz de String para Inteiro
  const numero = +chute;
  // * pegando a função
  if (chuteForInvalido(numero)) {
    //se não for numero vai ser inválido ou seja se for String
    //essa variável esta na página voz.js
    elementoChute.innerHTML += "<div>Valor inválido </div>";
    return; //para não executar mais nada
  }
  // # pegando a função onde ela verifica maior ou menor
  if (numeroMaiorOuMenorValorPermitido(numero)) {
    elementoChute.innerHTML += ` <div> Valor inválido: Fale um número entre 
        ${menorValor} e ${maiorValor} </div> `; //variáveis menorValor  e maiorValor vem da página sortearNumeros.js
    return; //para não executar mais nada
  }

  //criando um if quando acertar núm ero secreto
  //a variável numeroSecreto esta na página sortearNumeros.js
  if (numero === numeroSecreto) {
    //criando elemento para sobscrever na página quando acertar o número
    document.body.innerHTML = `
        <h2>Você Acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>
        
        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `;

  } else if (numero > numeroSecreto) {
    elementoChute.innerHTML = `<div class="numeros">O número secreto é menor <i class="fa-solid fa-arrow-down-long"> ${numero}</i></div> `;
  } else if (numero < numeroSecreto) {
    elementoChute.innerHTML = `<div class="numeros">O número secreto é maior <i class="fa-solid fa-arrow-up-long"> ${numero}</i></div>`;
  }
}
//*
function chuteForInvalido(numero) {
  return Number.isNaN(numero);
}
//#
function numeroMaiorOuMenorValorPermitido(numero) {
  return numero > maiorValor || numero < menorValor;
}


//criando umevento com função quando clicar no botão ele iniciara o jogo novamente
//body é pai tudo que tiver dentro ele executa
document.body.addEventListener("click", (e)=>{
    if(e.target.id == 'jogar-novamente'){//se clicar for iguak o id da página faça
        window.location.reload();//atualiza a página para jogar novamente
    }
});