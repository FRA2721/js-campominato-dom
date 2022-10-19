// dev: Francesco Cimino;
// proj: Campo Minato;
// lang: js;

const playNowBtn = document.getElementById("play-now-btn");
const verdict = document.getElementById("verdict");

// empty-arrays
let arrayNumbers = [];
let arrayBombs = [];
let userClick = [];

// boolean-variable
let end = false;

playNowBtn.addEventListener("click", generateGrid);

function generatorNumsArray(arrayLength) {
    
    let array = [];
    
    for(let i = 0; i < arrayLength; i++){
        array.push(i + 1);
    }
    return array;
}

function randomNumbersArrayGenerator(arrayLength, maxRndNum) {

    let array = [];

    // loop
    while( array.length < arrayLength){
        const rndNum = getRndInteger(1, maxRndNum);
        
        if(!array.includes(rndNum)){
            array.push(rndNum);
        }
    }

    return array;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function boxGenerator(){
    const boxGenerator = document.createElement("div");
    boxGenerator.classList.add("box");

    return boxGenerator;
}

function squareHandlerClick() {
    const boxList = document.getElementsByClassName("box");

    if(!(this.classList.value).includes("active") && !end){

        if(!arrayBombs.includes(parseInt(this.textContent))) {
            this.classList.add("active");
            userClick.push(this.textContent);

            if(userClick.length === (arrayNumbers.length - arrayBombs.length)) {
                end = true;

                // loop
                for(let i = 0; i < arrayNumbers.length; i++){
                    if(arrayBombs.includes(parseInt(boxList[i].textContent))) {
                        boxList[i].classList.add("bomb");
                    }
                }
    
                verdict.textContent = `Congratulation... You won, bye!!!!`;
                verdict.classList.remove("hidden");
            }

        } else {

            // loop
            for(let i = 0; i < arrayNumbers.length; i++) {
                if(arrayBombs.includes(parseInt(boxList[i].textContent))) {
                    boxList[i].classList.add("bomb");
                }
            }

            end = true;

            verdict.textContent = "You lost... I am sorry, bye...";
            verdict.classList.remove("hidden");
        }              
    }
}

function generateGrid() {
    
    // variables
    const userDifficulty = document.getElementById("difficulties");
    const mainTitle = document.getElementById("main-title");
    const gridSquare = document.querySelector(".grid");

    verdict.textContent = "";
    verdict.classList.add("hidden");
    gridSquare.innerHTML = "";
    end = false;
    userClick = [];
    
    const userChoise = parseInt(userDifficulty.value);

    arrayNumbers = generatorNumsArray(userChoise);
    arrayBombs = randomNumbersArrayGenerator(16, userChoise);

    // loop
    for(let i = 0; i < arrayNumbers.length ; i++){
        const item = boxGenerator();

        if(userChoise === 49){
            item.classList.add("hard");

        } else if(userChoise === 81){
            item.classList.add("medium");

        } else {
            item.classList.add("easy");
        }

        item.innerHTML = arrayNumbers[i];
        item.addEventListener("click", squareHandlerClick);
        gridSquare.append(item);
        mainTitle.classList.add("hidden");
        gridSquare.classList.remove("hidden");
    }
}