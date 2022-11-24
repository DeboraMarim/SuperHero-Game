// Importamos o Swal da biblioteca sweetalert2
import Swal from 'sweetalert2';

window.onload = 
  Swal.fire({
  title: 'Será que você consegue bater o record da Desenvolvedora do jogo? ha boatos de que ela se manteve no jogo por 67 rodadas seguidas! Se você tiver uma pontuação negativa, perde a rodada. Tente sobreviver! Quanto mais pontos, mais chances tem de quebrar o record! Boa Sorte!',
});
//localStorage.setItem("rcd", JSON.stringify(0));
const img = document.querySelector('#image');
const name = document.querySelector('#name');
const button = document.querySelector('#button');
const pontuacao = document.querySelector('#points')
const ACESS_TOKEN = '426089193070281';
const BASE_URL = `https://www.superheroapi.com/api.php/${ACESS_TOKEN}`;
const MAX_HEROES = 735;
const randomId = () => Math.floor(Math.random() * MAX_HEROES);

localStorage.setItem("qui", JSON.stringify(0));

let rcdA =0;

let rcdL = JSON.parse(localStorage.getItem("rcd"));
pontuacao.innerHTML = `Pontuação: ${0} - Record: ${rcdL}`;

function perdeu(value){
  if (value < 0){
    Swal.fire({
      title: 'Esse Heroi te deixou negativado... Tente novamente!',
    })

    rcdL = JSON.parse(localStorage.getItem("rcd"));
    

    localStorage.setItem("qui", JSON.stringify(0));

     
    if(rcdA > rcdL){
      localStorage.setItem("rcd", JSON.stringify(rcdA));
      pontuacao.innerHTML = `Record: ${rcdA}`;
    }else{
      pontuacao.innerHTML = `Record: ${rcdL}`;
    }
    rcdA = 0;
  }
 
}

button.addEventListener('click', (event) => {
  event.preventDefault();
  rcdA += 1;
  rcdL = JSON.parse(localStorage.getItem("rcd"));
  const id = randomId();


  if(id>= 1 & id < 100){
    let aux;
    aux = JSON.parse(localStorage.getItem("qui"));
    aux += 3;
    localStorage.setItem("qui", JSON.stringify(aux));
    let see = JSON.parse(localStorage.getItem("qui"));
    pontuacao.innerHTML = `Pontuação: ${see} - Record: ${rcdL}`;
    Swal.fire({
      title: 'Você achou um Herói premiado! Ganhou 3 pontos!',
    })
    perdeu(see)
  }

  if(id >= 100 & id < 200){
    let aux;
    aux = JSON.parse(localStorage.getItem("qui"));
    aux -= 3;
    localStorage.setItem("qui", JSON.stringify(aux));
    let see = JSON.parse(localStorage.getItem("qui"));
    pontuacao.innerHTML = `Pontuação: ${see} - Record: ${rcdL}`;
    Swal.fire({
      title: 'Você achou um Herói Zicado! Perdeu 3 pontos!',
    })
    perdeu(see)
  }

  if(id>= 200 & id < 300){
    let aux;
    aux = JSON.parse(localStorage.getItem("qui"));
    aux = aux +5;
    localStorage.setItem("qui", JSON.stringify(aux));
    let see = JSON.parse(localStorage.getItem("qui"));
    pontuacao.innerHTML = `Pontuação: ${see} - Record: ${rcdL}`;
    Swal.fire({
      title: 'Você acaba de ganhar 5 pontos!',
    })
    perdeu(see)
  }

  if(id >= 300 & id < 400){
    let aux;
    aux = JSON.parse(localStorage.getItem("qui"));
    aux += 2;
    localStorage.setItem("qui", JSON.stringify(aux));
    let see = JSON.parse(localStorage.getItem("qui"));
    pontuacao.innerHTML = `Pontuação: ${see} - Record: ${rcdL}`;
    Swal.fire({
      title: 'Você achou um Herói Maneiro Cara! Ganhou 2 pontos!',
    })
    perdeu(see)
  }

  if(id>= 400 & id < 450){
    let aux;
    aux = JSON.parse(localStorage.getItem("qui"));
    aux += 15;
    localStorage.setItem("qui", JSON.stringify(aux));
    let see = JSON.parse(localStorage.getItem("qui"));
    pontuacao.innerHTML = `Pontuação: ${see} - Record: ${rcdL}`;
    Swal.fire({
      title: 'Esse é um Herói irado! Você acaba de ganhar 15 pontos!',
    })
    perdeu(see)
  }

  if(id>= 450 & id < 500){
    let aux;
    aux = JSON.parse(localStorage.getItem("qui"));
    aux += aux;
    localStorage.setItem("qui", JSON.stringify(aux));
    let see = JSON.parse(localStorage.getItem("qui"));
    pontuacao.innerHTML = `Pontuação: ${see} - Record: ${rcdL}`;
    Swal.fire({
      title: 'Grandes batalhas são lutadas por grandes Herois! Você dobrou seus pontos!',
    })
    perdeu(see)
  }
  if(id>= 500 & id < 550){
    let aux;
    aux = JSON.parse(localStorage.getItem("qui"));
    aux += 1;
    localStorage.setItem("qui", JSON.stringify(aux));
    let see = JSON.parse(localStorage.getItem("qui"));
    pontuacao.innerHTML = `Pontuação: ${see} - Record: ${rcdL}`;
    Swal.fire({
      title: 'Um Bom Homem deve amar seu inimigos! Você ganhou 1 ponto!',
    })
    perdeu(see)
  }

  if(id>= 550 & id < 600){
    let aux;
    aux = JSON.parse(localStorage.getItem("qui"));
    aux += 2;
    localStorage.setItem("qui", JSON.stringify(aux));
    let see = JSON.parse(localStorage.getItem("qui"));
    pontuacao.innerHTML = `Pontuação: ${see} - Record: ${rcdL}`;
    Swal.fire({
      title: 'Quem vence a si mesmo é um herói maior do que quem enfrenta mil batalhas contra muitos milhares de inimigos! Toma 2 pontos!',
    })
    perdeu(see)
  }

  if(id>= 600 & id < 700){
    let aux;
    aux = JSON.parse(localStorage.getItem("qui"));
    aux -= 3;
    localStorage.setItem("qui", JSON.stringify(aux));
    let see = JSON.parse(localStorage.getItem("qui"));
    pontuacao.innerHTML = `Pontuação: ${see} - Record: ${rcdL}`;
    Swal.fire({
      title: 'Mais vale um homem lento à cólera do que um herói! Você acaba de perder 3 pontos!',
    })
    perdeu(see)
  }

  if(id>= 700 & id < 732){
    let aux;
    aux = JSON.parse(localStorage.getItem("qui"));
    aux -= 5;
    localStorage.setItem("qui", JSON.stringify(aux));
    let see = JSON.parse(localStorage.getItem("qui"));
    pontuacao.innerHTML = `Pontuação: ${see} - Record: ${rcdL}`;
    Swal.fire({
      title: 'As vezes sonhamos em ser os heróis, mas no final percebemos que nascemos para ser os vilões! Você acaba de perder 5 pontos!',
    })
    perdeu(see)
  }

  fetch(`${BASE_URL}/${id}`)
    .then((result) => result.json())
    .then((data) => {
      img.src = data.image.url;
      name.innerHTML = `${data.name} - cod# ${id}`;
    })
    .catch((error) => Swal.fire({
      title: 'Hero not found',
      text: error.message,
      icon: 'error',
      confirmButtonText: 'Cool',
    }));
});
