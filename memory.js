window.swal(' Les écrans sont néfastes avant l age de 4ans', 'quel age as votre enfant?', 'info')

const carte = document.querySelectorAll('.carte');
const contenaire = document.querySelector('.memory');
const loup = document.querySelector('.loup');
const loupdeux = document.getElementById('lou');

let hasFlippedCard = false;
let verou = false;
let firstCard, secondCard;


//1 fonction carte tourne
function tourner() {
  if (verou) return;
  if (this === firstCard) return;
  console.log(this)
  this.classList.add('tourne');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
  }


  secondCard = this;

  Match();
}
// 2) si les cartes ont la meme ref data alors elles sont similaire 
function Match() {
  let isMatch = firstCard.dataset.cartes === secondCard.dataset.cartes;
  isMatch ? disableCards() : unflipCards();
}

//  3 on suppr le onclick pr plus quelles se retournent
function disableCards() {
  firstCard.removeEventListener('click', tourner);
  secondCard.removeEventListener('click', tourner);
  resetBoard();
}

//  4) pour vérrouiller les autres cartes pas visés 
function unflipCards() {
  verou = true;

  // interval pr suppr la class tourne
  setTimeout(() => {
    firstCard.classList.remove('tourne');
    secondCard.classList.remove('tourne');
    resetBoard();
  }, 1500);
}

//  5) pour réinitialiser les cartes à chaque tour avc leur valeur 
function resetBoard() {
  [hasFlippedCard, verou] = [false, false];
  [firstCard, secondCard] = [null, null];
}


carte.forEach(carte => carte.addEventListener('click', tourner));
console.log(carte)



// ******************************************************anim
// attrape le loup
loup.onclick = function () {
  swal('Attrape le Grand mechant Loup! ')
};
loupdeux.onclick = function () {
  swal('oh non', 'il s est encore sauvé! ', 'warning')
};

//au clik sur loup sa déclanche une animation le loup qui arrive 
var anim = document.querySelectorAll('.anim');
console.log(anim)

document.getElementById('stop').onclick = function () {
  for (var i = 0; i < anim.length; i++) {
    if (anim[i].style.animationPlayState == 'running') {
      anim[i].style.animationPlayState = 'running';
    } else {
      anim[i].style.animationPlayState = 'paused'; {
        swal('Bravos!', 'tu l a attrappé!', 'success')
      };
    }
  }
}

// ************************************************************fin anim


// ***********************************************2 cartes pareil 


// **************************version 1**************************

// 1) Au click sur .carte => retourne , (css le retourner ou js?) 
//  boucle foreach et on ecoute l'evenement /et ou  toggle sur la carte visé 

// 2) On px retourner/selectionner maximum 2 cartes 
//????

// 3) Si carte1  === carte2 : alors Remove les deux cartes
// Condition

// 4) Si carte1 != carte2 : alors retourner les cartes 
// pareil 

// 5) Si .memory (ou .carte?) ===0 alors Alerte "bravos fin du jeux"

let btn = document.getElementById('btn');

btn.onclick = function () {
  swal('BRAVOS', 'tu as gagner!', 'success')
}
//  timer
const min = 10;
let time = min * 60;

const timer = document.getElementById('timer');

setInterval(updatetimer, 1000);

function updatetimer() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  seconds = seconds < 10 ? '0' + seconds : seconds;
  timer.innerHTML = `${minutes}: ${seconds}`;
  time--;

}
// clearinterval