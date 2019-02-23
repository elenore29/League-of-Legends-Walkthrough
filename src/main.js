//Declarando las variables que enlazan los elementos HTML mediante el DOM
const start = document.getElementById('start');
const championList = document.getElementById('champion-list');
const cardSummary = document.getElementById('card-summary');
const rol = document.getElementsByClassName('rol');
const modalChamp = document.getElementById('modal-champ');
const modalFun = document.getElementById('modal-fun');

//Declarando las variables que enlazan los botones del HTML mediante el DOM
const startButton = document.getElementById('start-button');
const attackDesc = document.getElementById('attack-desc');
const attackUpw = document.getElementById('attack-upw');
const magic = document.getElementById('magic');
const defense = document.getElementById('defense');
const back = document.getElementById('back');

//Boton para el modal de curiosidades
const funFacts = document.getElementById('fun-facts');
const closeFunFacts = document.getElementById('close-fun');
const closeModal = document.getElementById('close-modal-fun');

//Input para buscar por nombre
let search = document.getElementById('search');

//Graficas
const lolChart = document.getElementsByClassName('my-char');

// //Esta función es para seleccionar el rol por el cual se va a filtrar
const selectRol = () => {
  for (let i = 0; i < rol.length; i++) {
    rol[i].addEventListener("click", () => {
      let rolId = rol[i].id;
      const arrayFiltered = window.lol.filterByRol(lolData, rolId);
      printData(arrayFiltered);
    })
  }
};

//Funcion para agregar el evento key up al input para filtrar por nombre
search.addEventListener('keyup', () => {
  let name2 = search.value;
  let filtered = window.lol.filterByName(lolData, name2);
  if (name2 == "") {
    printData(lolData);
  } else {
    printData(filtered);
  }
});

//Evento del boton Comenzar
startButton.addEventListener('click', () => {
  start.classList.add('hide');
  championList.classList.remove('hide');
});

// //Esta variable forma parte de la función de imprimir
const champion = document.getElementsByClassName('champion');

// //Función para imprimir la data en el HTML
const printData = (newArrayInfo) => {
  cardSummary.innerHTML = " ";
  newArrayInfo.forEach(champ => {
    let result = `<div id='${champ.name}' class="champion"> <img src="${champ.splash}">
    <h3> ${champ.name} </h3> <div class="tags"> <p> ${champ.primaryRol} </p> <p> ${champ.secondaryRol} </p> </div></div>`;
    cardSummary.insertAdjacentHTML("beforeend", result);
  });
//el for asigna evento click a las "tarjetas" de personajes enlistadas para que al dar click
//se abra el modal, obtiene del id del campeón
  for (let i = 0; i < champion.length; i++) {
    champion[i].addEventListener("click", () => {
      let champSelected = champion[i].id;
      const champ = window.lol.toModal(lolData, champSelected);
      printModal(champ);
      modalChamp.classList.remove('hide');
    })
  }
};

const printModal = (champ) => {
  document.getElementById('printModal').innerHTML = `<h1>${champ.name}</h1>
  <p class="champion-title">${champ.title}</p>
  <div class="background-modal" style="background-image:url(${champ.splash})">
  <h2>${champ.primaryRol}</h2>
  <h2>${champ.secondaryRol} </h2>
  //graficas
  <p class="champion-stats">Attack: ${champ.attack}</p>
  <p class="champion-stats">Defense: ${champ.defense}</p>
  <p class="champion-stats">Magic: ${champ.magic}</p>
  <p class="champion-stats">Difficulty: ${champ.difficulty}</p>
  <p class="champion-stats">HP: ${champ.hp}</p>
  <p class="champion-stats">MP: ${champ.mp}</p>
  <p class="champion-stats">Armor: ${champ.armor}</p>
  <p class="champion-stats">Crit: ${champ.crit}</p>
  <p class="champion-stats">Attack Damage: ${champ.attackdamage}</p>
  <p class="champion-stats">Move Speed: ${champ.movespeed}</p>
  </div>`;
};

//Función para el boton que cierra los modales de los campeones
closeFunFacts.addEventListener('click', () => {
  modalChamp.classList.add('hide');
});

window.addEventListener('click', () => {
  if (event.target == modalChamp) {
    modalChamp.classList.add('hide');
  }
});

//Funciones con las que se ordena de manera Descendente
attackDesc.addEventListener('click', () => {
  const attackSortDesc = window.lol.sorterByAttack(lolData, -1);
  printData(attackSortDesc);
});

//Funciones con las que se ordena de manera Ascendente
attackUpw.addEventListener('click', () => {
  const attackSortUpw = window.lol.sorterByAttack(lolData, 1);
  printData(attackSortUpw);
});

magic.addEventListener('click', () => {
  const magicSort = window.lol.sorterByMagic(lolData);
  printData(magicSort);
});

defense.addEventListener('click', () => {
  const defenseSort = window.lol.sorterByDefense(lolData);
  printData(defenseSort);
});

back.addEventListener('click', () => {
  championList.classList.add('hide');
  start.classList.remove('hide');
});

//Función para llamar a la función de reduce
funFacts.addEventListener('click', () => {
  const reduce = window.lol.toReduce(lolData);
  modalFun.classList.remove('hide');
  let average = reduce / lolData.length;
  document.getElementById('average').innerHTML = average;
});

//Función para el boton que cierra el modal de average
closeModal.addEventListener('click', () => {
  modalFun.classList.add('hide');
});

window.addEventListener('click', () => {
  if (event.target == modalFun) {
    modalFun.classList.add('hide');
  }
});

// //Variable para extraer la data
let lolData = [];
//Fetch para traer la data del archivo lol.json
const url = './data/lol/lol.json';
fetch(url)
.then(response => response.json())

.then(json => json.data)
.then(data => { 
  lolData =  window.lol.showData(data);
  return lolData;
})

.then(toPrint => printData(toPrint))
.then(printByRol => selectRol(printByRol))
.catch(err => (err))