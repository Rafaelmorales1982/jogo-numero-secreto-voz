//pegando elemento do html
const elementoChute = document.getElementById("chute");

//utilizando API de voz   https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'; // reconhecendo nossa voz em português 
recognition.start();

//criando evento de voz
recognition.addEventListener('result', onSpeak);

function onSpeak(e){
   chute =  e.results[0][0].transcript;
   exibeChuteNaTela(chute);
   verificaChuteValido(chute);
}
//criando a função recebendo a nossa voz 
function    exibeChuteNaTela(chute){ //função cria elementos div e span com class e recebe a variável da voz
    elementoChute.innerHTML = `
    <div> Você disse</div>
    <span class="box"> ${chute}</span>
    `

}
//Esse evento é quando não acertar o numero secreto ele starta novamente mas com mesmo número que foi gerado
recognition.addEventListener('end', () => recognition.start());
