// let huvisagch zarladg turul
// let-r zarlgdsn huwisagchiig dahin zarlh bolomjgu bdg

let btnRef = document.querySelectorAll(".button-option");
let popupRef = document.querySelector('.popup');
let newGameRef = document.getElementById('new-game');
let restartRef = document.getElementById('restart');
let msgRef = document.getElementById('message');

// hojih bolomjiin massive 

let winningPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [2, 5, 8],
    [1, 4, 7],
    [3, 4, 5],
    [0, 4, 8],
    [6, 7, 8],
    [2, 4, 6]
];

// X toglogchoos togloom ehluuleh 
let xTurn = true;
let count = 0;

const disableButtons = () => {
    btnRef.forEach((Element) => (Element.disabled) = true)
    popupRef.classList.remove('hide');
}

const enableButtons = () => {
    btnRef.forEach((Element) => {
        Element.innerHTML = '';
        Element.disabled = false;

    });

    popupRef.classList.add('hide');
};

// hojsn toglogchiig shalgah

const winChecker = () => {
    for(let i of winningPattern){
        let [Element1, Element2, Element3] = [
            btnRef[i[0]].innerHTML, 
            btnRef[i[1]].innerHTML, 
            btnRef[i[2]].innerHTML, 
        ];

        if(Element1 != '' &&(Element2 != '' && Element3 != '')){
            if(Element1 == Element2 && Element2 == Element3){
            
            winFunction(Element1);  
            }
           
        } 
    }
};

// winFunction ii uildel

const winFunction = (letter) => {
    disableButtons();
    if(letter == 'X'){
        msgRef.innerHTML = "X нь хожлоо";
    }else{
        msgRef.innerHTML = "O нь хожлоо";
    }
};

// function tentseh uyd buyu draw
const drawFunction  = () =>{
    disableButtons();
    msgRef.innerHTML = 'Tentslee!!'
}
// togloomiig ahin ehluulh buyu new 

newGameRef.addEventListener('click', () =>{
    count = 0;
    enableButtons();
})
// togloomig dahin ehluuleh buyu restart
restartRef.addEventListener('click', () =>{
    count = 0;
    enableButtons();
})

// delgetsend x o, iig ilgeeh 
// element burd tuhain uildliig hiih 'foreach'
// =>  sum zaasn uildliig butsaana 
btnRef.forEach((Element) => {
    Element.addEventListener('click', () =>{
        if(xTurn){
            xTurn = false;
            Element.innerHTML = 'X';
            Element.disabled = true;
            }else{
                xTurn = true;

                Element.innerHTML = 'o';
                Element.disabled = 'true';
            }

            count +=1;
            if(count == 9){
                // tentsen esehiig shalgah function
                drawFunction();
            }
            // hojsn uguig shalgadg bh ystoi
            winChecker();
    });
});

window.onload = enableButtons;