const botaoIniciaCamera = document.querySelector("[data-video-botao]");
const campoCamera = document.querySelector("[data-camera]");
const video = document.querySelector("[data-video]");
const botaoTiraFoto = document.querySelector ("[data-tirar-foto]");
const canvas = document.querySelector("[data-video-canvas]");
const mensagem = document.querySelector ("[data-mensagem]");
const botaoEnviarFoto = document.querySelector ("[data-enviar]");

let imagemURL = "";

botaoIniciaCamera.addEventListener("click", async function(){
    const iniciarVideo = await navigator.mediaDevices.getUserMedia({video: true, audio: false})

    botaoIniciaCamera.style.display = "none";
    campoCamera.style.display = "block";

    video.srcObject = iniciarVideo;
})

botaoTiraFoto.addEventListener("click", function() {

    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);

    imagemURL = canvas.toDataURL("image/jpeg");

    campoCamera.style.display = "none";
    mensagem.style.display = "block";
    

})

botaoEnviarFoto.addEventListener("click", ()=> {
    const recebeDadosExistentes = localStorage.getItem("cadastro");
    const converteRetorno = JSON.parse(recebeDadosExistentes);
    console.log(converteRetorno.imagem);
    converteRetorno.imagem = imagemURL;

    localStorage.setItem('cadastro', JSON.stringify(converteRetorno));
    
    window.location.href = "./abrir-conta-form-3.html";
})