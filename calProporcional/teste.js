const dataPlanos = [
    {   id: 1,
        Plano: 250,
        valor: 110
    },
    {
        id: 2,
        plano: 350,
        valor: 130
    },
    {
        id: 3,
        plano: 450,
        valor: 160,
    },
    {
        id: 4,
        plano: 500,
        valor: 144.33
    },
    {
        id: 5,
        plano: 600,
        valor: 210
    },
    {
        id: 6,
        plano: 700,
        valor: 177.67
    }
];






//seleção de elementos
const planoAtual = document.getElementById("planoAtual")

const planoNovo = document.querySelector("#planoNovo");
const vencimento = document.querySelector("#vencimento");

const calcBtn = document.querySelector("#calc-btn");
const clearBtn = document.querySelector("#clear-Btn");
const select = document.querySelector("#planoAtual")



//funcoes

function cleanInputs(){
    planoAtual.value = "";
    planoNovo.value = "";
    vencimento.value = "";
}


//Inicialização



// Evento
clearBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    cleanInputs();
})




