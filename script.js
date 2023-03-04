const dark = document.getElementById("darkMode")
const ball = document.getElementById("ball")
const back = document.getElementById("back")

const teste = document.getElementById("teste")

const btnCopy = document.getElementById("copiar")
const result = document.getElementById("pw")
const barra = document.getElementById("barra")
const nivel = document.getElementById("nivel")
const gerar = document.getElementById("gerar")
const titulo = document.getElementById("h1")

const Qnt = document.getElementById("tam")
const uppercase = document.getElementById("Up")
const lowercase = document.getElementById("Dw")
const numbers = document.getElementById("Num")
const simbols = document.getElementById("Sim")

// -----------------------------------------

dark.addEventListener("click", () =>{
    ball.classList.toggle("ball_after")
    ball.style.transition = ".3s"
    back.classList.toggle("todos_after")
    dark.classList.toggle("darkMode_after")
})

function desa(){
    titulo.style.opacity = "0%";
    titulo.style.transition = ".3s";
}

btnCopy.addEventListener("click", function(){
    titulo.style.opacity = "100%";
    titulo.style.transition = ".3s";
    setTimeout(desa, 3000);
})

const getLowercase = () =>{
    const charLower = "abcdefghijklmnopqrstuvwxyz";
    return charLower[Math.floor(Math.random() * charLower.length)];
}

const getUppercase = () =>{
    const charUpper = 'ABCDEFGHIJKLMNOPWRSTUVWXYZ';
    return charUpper[Math.floor(Math.random() * charUpper.length)];
}

const getNumbers = () =>{
    const charNumbers = '0123456789';
    return charNumbers[Math.floor(Math.random() * charNumbers.length)];
}

const getSymbols = () =>{
    const charSymbols = "!@#$%&./-";
    return charSymbols[Math.floor(Math.random() * charSymbols.length)];
}


const randomChart = {
    Upp: getUppercase,
    Low: getLowercase,
    Nums: getNumbers,
    Symb: getSymbols,
};

gerar.addEventListener("click", () =>{
    const lengths = Qnt.value;
    const Upp = uppercase.checked;
    const Low = lowercase.checked;
    const Nums = numbers.checked;
    const Symb = simbols.checked;

    result.value = generatPassoword(
        Upp, Symb, Low, Nums, lengths
    );
})

function generatPassoword(Upp ,Symb ,Low ,Nums ,lengths){

    let geners = '';

    let typesCount = Upp + Symb + Low + Nums;


    const arraii = [{ Upp }, { Nums }, { Low }, { Symb }].filter(

        (items) => {
            return Object.values(items)[0]
        }
    );

    for (let i = 0; i < lengths; i++){
        arraii.forEach((type) => {
            const fumaca = Object.keys(type)[0];
            geners += randomChart[fumaca]();
        });
    }

    const finish = geners.slice(0, lengths);


    if(finish.length == 0){
        nivel.style.opacity = "0"
        nivel.style.transition = ".1s"
    }    

    if(finish.length > 0){
        nivel.style.opacity = "100%"
    }

    if(finish.length < 8){
        barra.style.width = "0%";
        barra.style.width = "33.3%";
        barra.style.transition = ".4s";
        barra.style.backgroundColor = "#ff0026";
        barra.style.boxShadow = "0 0 10px #ff002677";
    }

    if(finish.length >= 8){
        barra.style.width = "0%";
        barra.style.width = "66.6%";
        barra.style.transition = ".4s";
        barra.style.backgroundColor = "#ffbf00";
        barra.style.boxShadow = "0 0 10px #ffbf0077";
    }

    if(finish.length >= 8 && Nums && Symb && Upp && Symb){
        barra.style.width = "0%";
        barra.style.width = "100%";
        barra.style.transition = ".4s";
        barra.style.backgroundColor = "#00c700";
        barra.style.boxShadow = "0 0 10px #00c70077";
    }

    if(finish.length >= 14){
        barra.style.width = "0%";
        barra.style.width = "100%";
        barra.style.transition = ".4s";
        barra.style.backgroundColor = "#00c700";
        barra.style.boxShadow = "0 0 10px #00c70077";
    }

    return finish;
    
}


btnCopy.addEventListener("click", () =>{
    navigator.clipboard.writeText(result.value);
})