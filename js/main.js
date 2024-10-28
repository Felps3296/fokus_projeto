const html = document.querySelector('html');
const focobt = document.querySelector('.app__card-button--foco');
const curtobt = document.querySelector('.app__card-button--curto');
const longobt = document.querySelector('.app__card-button--longo');
const banner = document.querySelector('.app__image');
const title = document.querySelector('.app__title');
const buttons = document.querySelectorAll('.app__card-button');
const musicFocoInput = document.querySelector('#alternar-musica');
const music = new audio('/sons/luna-rise-part-one.mp3')
music.loop = true;

musicFocoInput.addEventListener('change', () => {
    if (music.paused){
        music.play();
    }else {
        music.pause();
    }
})

//Claalist representa uma lista de classes css
focobt.addEventListener('click', () => {
    alterarcontexto('foco');
    focobt.classList.add('active');
})

//addEventListener adicionar evento
curtobt.addEventListener('click', () => {
    alterarcontexto('descanso-curto');
    curtobt.classList.add('active');
})

longobt.addEventListener('click', () => {
    alterarcontexto('descanso-longo')
    longobt.classList.add('active');
})

function alterarcontexto(contexto){
    buttons.forEach(function (contexto){
        contexto.classList.remove('active');
    })

    html.setAttribute('data-contexto', contexto);
    banner.setAttribute('src', `/imagens/${contexto}.png`)

    switch (contexto){
        case 'foco':
            title.innerHTML = `Otimize sua produtividade,<br>
            <strong class="app__title-strong">mergulhe no que importa.</strong>`
            break;

        case 'descanso-curso':
            title.innerHTML = `titulo.innerHTML = 
            Que tal dar uma respirada? <strong class="app__title-strong">Faça uma pausa curta!</strong>`
            break;

       case 'descanso-longo':
           title.innerHTML = `Hora de voltar à superfície.<strong class="app__title-strong"> Faça uma pausa longa.</strong>`
            break;

        default:
            break;
    }
}

