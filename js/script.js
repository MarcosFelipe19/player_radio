//click no play para a música rodar
//click no pause para pausar a música 
//click em prev passar para música anterior
//click em next passar para proxima música

let btnPlay = document.getElementById("play")
let btnPausa = document.getElementById("pausa")
let btnPrev = document.getElementById("prev")
let btnNext = document.getElementById("next")
var audio = document.getElementById("audio")
let nomeMusica = document.getElementById("nome_musica")
let input = document.getElementById("input")

let index = 0
let musicas  = [
    {
        nome:"Charlie Brown Jr- Só por uma Noite",
        musica:"Charlie Brown Jr- Só por uma Noite._48k.mp3"
    },
    {
        nome:"Charlie Brown Jr - Zóio de lula",
        musica:"Charlie Brown Jr - Zóio de lula_48k.mp3"  
    }
]


btnPlay.addEventListener("click", play)
btnPausa.addEventListener("click", pausa)
btnNext.addEventListener("click", nextMusica)
btnPrev.addEventListener("click", prevMusica)
audio.addEventListener("ended", play)



function play(){
    audio.play()
    setTimeout(() => {
        input.max = audio.duration
    },1000)
    nextBarra()
}
function pausa(){
    audio.pause()
}
function selectBarra(){
    audio.currentTime = input.value
}
function nextBarra(){
    interval = setInterval(() => {input.value = audio.currentTime}, 1000)
}
function nextMusica(){
    if(index < musicas.length - 1){
        index++
    }
    nomeMusica.innerHTML = musicas[index].nome
    audio.children[0].src = `./assets/${musicas[index].musica}`
    audio.load()
    play()
}
function prevMusica(){
    if(index > 0){
        index--
    }
    nomeMusica.innerHTML = musicas[index].nome
    audio.children[0].src = `./assets/${musicas[index].musica}`
    audio.load()
    play()
}
 