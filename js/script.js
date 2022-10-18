// developer: Francesco Cimino;
// project: Campo Minato;
// language: javascript;

const gridID = document.getElementById("grid-id");

const modeSelected1 = document.getElementById("mode-selected");
const playBtn = document.getElementById("play-btn");

playBtn.addEventListener("click", function(){

gridID.innerHTML="";

let flag = true

const num = modeSelected(modeSelected1.value);
const bombArray = randomArray(num)
const win = num - bombArray.length;
const clickBox = [ ];
const arrayLenght = modeSelected(modeSelected1.value);
const arrayBox = createArray(arrayLenght);

// loop
for (let i = 0; i < arrayBox.length; i++){

const nodeHtml = newHtmlElement(arrayBox[i], modeSelected.value);
nodeHtml.addEventListener("click", function(){

if (flag) {

    if (bombArray.includes(parseInt(this.textContent))) {    
    const squareList = document.getElementsByClassName("common-box");

    for (let i = 0; i < squareList.length; i++){
        const item = squareList[i];
    
        for (let j = 0; j < bombArray.length; j++){
            if (parseInt(item.textContent) === bombArray[j])
                item.classList.add("red");
                }
            }
    flag = false;
}

else if (clickBox.length < win){

    if (!clickBox.includes(this.textContent)){
    this.classList.add("aqua");
    clickBox.push((this.textContent));
    }

    if (clickBox.length === win){;
        flag = false;
    }
    
}

}
})

gridID.append(nodeHtml);

}
} ) 


function modeSelected(valueSelected){
    let numElement = 0;

        if (valueSelected === "difficulties-1-type")
         numElement = 81;

        else if (valueSelected === "difficulties-2-type")
        numElement = 49;

        else if (valueSelected ==="difficolta-3-type")
        numElement = 100; 
        
        return numElement;
    }

function handleDivClick(){
modeSelected
} 

function newHtmlElement(textElement, classBasis){
    const element = document.createElement("div");
    element.classList.add("common-box");
    
    let classStructure = "";

    if (classBasis === "difficulties-1-type"){
        classStructure = "box-1";
    }
    else if (classBasis === "difficulties-2-type")
        classStructure="box-2";

    else if (classBasis === "difficulties-3-type")
        classStructure="box-3"
    
    element.classList.add(classStructure);
    
    
    element.textContent = textElement;
    return element;
    }
    
    function createArray(arrayLength){
    const arrayResult = [ ];
    for (let i = 0; i < arrayLength; i++){
        arrayResult.push(i + 1);
    }
    
    return arrayResult;
    }
    
    function generator (min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }
      
    function randomArray(maxNumber){
    const result = [ ];

    // loop
    while (result.length < 16){
    const number=generator(1, maxNumber);
    if (!result.includes(number))
    result.push(number);
    }

    return result;
    }