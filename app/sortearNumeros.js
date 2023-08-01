/* variável recebendo a função de número aleatório*/
/* 
const numeroSecreto = (()=>{
    return parseInt(Math.random() * 100);

});

console.log(`Número Secreto: ${numeroSecreto()}`);
*/

/*2° fomra variável recebendo a função de número aleatório*/
const menorValor = 1;
const maiorValor = 1000;
const numeroSecreto = gerarNumeroAleatorio();

function gerarNumeroAleatorio() {
  return parseInt(Math.random() * maiorValor + 1); //
}
console.log("Número Secreto:", numeroSecreto); //mostra o número aleatório

//pegando as informações do html
const elementoMenorValor = document.getElementById("menor-valor");
elementoMenorValor.innerHTML = menorValor; //pegando da variável para mostrar na página

const elementoMaiorValor = document.getElementById("maior-valor");
elementoMaiorValor.innerHTML = maiorValor;
