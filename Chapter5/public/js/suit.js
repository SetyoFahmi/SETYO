//Variables
const rock_user = document.getElementById('r-user');
const paper_user = document.getElementById('p-user');
const scissors_user = document.getElementById('s-user');
const rock_com = document.getElementById('r-com');
const paper_com = document.getElementById('p-com');
const scissors_com = document.getElementById('s-com');
const Box = document.getElementById('box');
const info = document.getElementById("h1");
const refresh = document.getElementById("refresh");
const x = document.querySelector(".user-tool");
const addelement1 = [...document.getElementsByClassName("dissap")];
const button = document.querySelector('button');



//Computer Think
function comThink() {
    let choices = ['Batu', 'Gunting', 'Kertas'];
    let randomChoices = Math.floor(Math.random() * 3);
    return choices[randomChoices];

}

//Warna dalam box
function resultPlayer() {
    Box.classList.add('Box'),
        info.setAttribute("style", "font-size:36px; color:white;");

}

function resultComputer() {
    Box.classList.add('Box'),
        info.setAttribute("style", "font-size:36px; color:red;");

}

function resultDraw() {
    Box.classList.add('drawBox');

    info.setAttribute("style", "font-size:36px; color:white;");

}

//tulisan Win,Lose,Draw di dalam BOX
function win() {
    console.log("Player 1 Win");
    resultPlayer();
    info.innerText = "PLAYER 1 WIN"

}

function lose() {
    console.log("COM WIN");
    resultComputer();

    info.innerText = "COM WIN"
}

function draw() {
    console.log("Draw");
    resultDraw();

    info.innerText = "Draw"
}


// Aturan Permainan
function gameCompare(pilihanUser) {

    const computerUser = comThink();
    console.log("Hasil User => " + pilihanUser);
    console.log("Hasil dari => " + computerUser);

    switch (pilihanUser + computerUser) {
        case "BatuGunting":
        case "GuntingKertas":
        case "KertasBatu":
            win();
            break;

        case "GuntingBatu":
        case "BatuKertas":
        case "KertasGunting":
            lose();
            break;

        case "GuntingGunting":
        case "BatuBatu":
        case "KertasKertas":
            draw();
    }


    switch (computerUser) {
        case "Batu":
            rock_com.classList.add('chosen');

            break;
        case "Gunting":
            scissors_com.classList.add('chosen');
            break;
        case "Kertas":
            paper_com.classList.add('chosen');
    }
}


//Player 1 Choice
function play() {
    rock_user.addEventListener('click', function() {
        this.classList.add('chosen');
        gameCompare("Batu");
        addelement1.forEach(addelement3 => {
            addelement3.setAttribute("style", "cursor: not-allowed; pointer-events: none;")
        })

    })

    paper_user.addEventListener('click', function() {
        this.classList.add('chosen');
        gameCompare("Kertas");
        addelement1.forEach(addelement3 => {
            addelement3.setAttribute("style", "cursor: not-allowed; pointer-events: none;")
        })
    })

    scissors_user.addEventListener('click', function() {
        this.classList.add('chosen');
        gameCompare("Gunting");
        addelement1.forEach(addelement3 => {
            addelement3.setAttribute("style", "cursor: not-allowed; pointer-events: none;");
        })
    })
}

play();



// Refresh 
refresh.addEventListener('click', function() {
    addelement1.forEach(addelement2 => {
        addelement2.classList.remove('chosen')
    });
    addelement1.forEach(addelement3 => {
        addelement3.removeAttribute("style", "cursor: not-allowed;pointer-events: none;")

    })
    Box.classList.remove('Box');
    Box.classList.remove('drawBox');
    info.removeAttribute("style", "color: ''; font-size:'' ")

    info.style.marginTop = null
    info.style.fontSize = null
    info.innerText = "VS"
    button.disabled = false;
})