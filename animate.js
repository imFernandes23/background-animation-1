window.addEventListener('load', elements())
let qtd = 100;
let maxSize = 4;


function elements(){
    const backGround =  document.getElementById('Bg')
    for(let i = 0 ; i < 100; i++){
        const card = document.createElement('div')
        card.classList.add('card')
        backGround.appendChild(card)
    }

}

function posiRandom(){
    let max = 60
    let min = -60

    return Math.random() * (max - min) + min
}

function sizeRandom(maxSize){
    return Math.random() * maxSize
}


function anime(){
    for(let i = 0;  i < qtd; i++){
        const element = document.getElementsByClassName('card')[i]
        element.style.transform = 'translate('+posiRandom()+'vw,'+posiRandom()+'vh) scale('+ sizeRandom(maxSize) +')'
        element.style.opacity = 1
    }
}