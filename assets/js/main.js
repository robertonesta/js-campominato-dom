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

  // aggiungo eventlistener per la classe active ciclando per la lunghezza dell'array cellEl


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




