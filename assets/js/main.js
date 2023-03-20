// Creo una variabile dove salvo il container delle 64 celle (container-grid)
const containerEl = document.querySelector(".container");

const playEl = document.querySelector(".play")


playEl.addEventListener('click', function () {
    containerEl.innerHTML = "";

    const difficultyEl = document.getElementById("difficulty")
    console.log(difficultyEl)
    //creare una variabile in cui l'nMax varia a seconda della difficoltà
    let nMax = difficultyEl.value;
    const bombs = createBombs(nMax);
    //creare variabile per segnalare il punteggio
    let points = 0;

    // creo un ciclo n volte per le celle (dove n in questo caso sta per 100 o 81 o 49)
    for (let i = 1; i < nMax; i++) {
        const cell = `<div class="cell" style="width: calc(100% / ${Math.sqrt(nMax)}"><p class="m-0">${i}</p></div>`;
        containerEl.innerHTML += cell;
    }
    // seleziono una cella che ha classe cell e active

    const cellEl = document.querySelectorAll(".cell")

    for (let i = 0; i < cellEl.length; i++) {
        const thisCell = cellEl[i];
        //console.log(thisCell)       
        
        thisCell.addEventListener("click", function () {
            //Se si clicca su una cella che è una bomba: la cella si colora di rosso e finisce la partita.
            console.log(i)
            let isABomb = bombs.includes(i+1);
            if (!isABomb) {
                thisCell.classList.add("bg_selected")
                points++;
                // this.classList.add("active")
                //console.log("Changed the color")
            } else {
                thisCell.classList.add("bg_bomb")
                setTimeout(() => {
                    alert(`Hai perso! Il tuo punteggio finale è ${points}`);
                }, 1);                            
            }
        })
    }
    //creare una variabile per generare le bombe
    console.log(bombs);
    //creare funzione per le bombe
    function createBombs(cellEl) {
        const bombsRandomNumber = [];

        //-generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
        for (let i = 0; i < 16; i++) {
            let bomb = Math.floor(Math.random() * nMax) + 1;

            // controllare se i numeri generati sono nell'array dei numeri-bombe
            while (bombsRandomNumber.includes(bomb)) {
                bomb = Math.floor(Math.random() * nMax) + 1;
            }
            bombsRandomNumber.push(bomb);
        }
        //inserisci le bombe nell'array
        bombsRandomNumber.sort((a, b) => a - b);
        return bombsRandomNumber;
    }
})

