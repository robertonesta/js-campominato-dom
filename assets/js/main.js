// Creo una variabile dove salvo il container delle 64 celle (container-grid)
const containerEl = document.querySelector(".container");

const playEl = document.querySelector(".play")

playEl.addEventListener('click', function(e){
  e.preventDefault();

  containerEl.innerHTML = "";

  const difficultyEl = document.getElementById("difficulty")
  console.log(difficultyEl)
  //creare una funzione in cui l'nMax varia a seconda della difficoltà

  let nMax = difficultyEl.value;

  // creo un ciclo n volte per le celle (dove n in questo caso sta per 100 o 81 o 49)
  for (let i = 1; i <= nMax; i++) {
  const cell = `<div class="cell" style="width: calc(100% / ${Math.sqrt(nMax)}"><p class="m-0">${i}</p></div>`;
  containerEl.innerHTML += cell;
  }
  // seleziono una cella che ha classe cell e active

  const cellEl = document.querySelectorAll(".cell")

  for (let i = 0; i < cellEl.length; i++) {
    const thisCell = cellEl[i];
    console.log(thisCell)
    thisCell.addEventListener("click", function() {
        thisCell.classList.add("bg_selected")
        // this.classList.add("active")
        console.log("Changed the color")
    })
}
})

//-generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
//nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
//Se si clicca su una cella che è una bomba: la cella si colora di rosso e finisce la partita.
//Altrimenti si colora di azzurro e si può continuare a cliccare sulle altre celle.
//la partita finisce o quando si clicca su una bomba o quando si cliccano tutte le celle che non sono bombe.
//a fine partita il software genera il punteggio finale delle celle blu cliccate.

