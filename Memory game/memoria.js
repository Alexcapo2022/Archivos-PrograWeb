//INICIALIZACION DE VARIABLES
let tarjetasDestapadas = 0;
let tarjeta1=null;
let tarjeta2=null;
let primerResultado=null;
let segundoResultado=null;
let movimientos = 0;
let aciertos=0;
let temporizador=false;
let timer =60;
let timerInicial =60;
let tiempoRegresivoid =null;

//Apuntando a documento HTML
let mostrarMovientos = document.getElementById('movimientos');
let mostrarAciertos =document.getElementById('aciertos');
let mostrarTiempo = document.getElementById('t-restante');

//Generando numeros aleaotorios
let numeros =[1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12];
numeros.splice(0,1,'💻')//cambia valores en un arreglo 
numeros.splice(1,1,'💻')
numeros.splice(2,2,'⌨')
numeros.splice(3,2,'⌨')
numeros.splice(4,3,'🖥')
numeros.splice(5,3,'🖥')
numeros.splice(6,4,'🎧')
numeros.splice(7,4,'🎧')
numeros.splice(8,5,'💾')
numeros.splice(9,5,'💾')
numeros.splice(10,6,'🔌')
numeros.splice(11,6,'🔌')
numeros.splice(12,7,'📁')
numeros.splice(13,7,'📁')
numeros.splice(14,8,'🎯')
numeros.splice(15,8,'🎯')
numeros.splice(16,9,'🎮')
numeros.splice(17,9,'🎮')
numeros.splice(18,10,'⌚')
numeros.splice(19,10,'⌚')
numeros.splice(20,11,'🛒')
numeros.splice(21,11,'🛒')
numeros.splice(22,12,'💵')
numeros.splice(23,12,'💵')

numeros = numeros.sort(()=>{return Math.random()-0.5})//SORT:ordena los numeros respecto a la funcion
let board; //global
console.log(numeros);

//Funciones
function contarTiempo(){
    tiempoRegresivoid=setInterval(()=>{
        timer--;
        mostrarTiempo.innerHTML = `Tiempo: ${timer} segundos`;
        if(timer == 0){
            clearInterval(tiempoRegresivoid);
            bloquearTarjetas();
        }
    },1000);
}
function bloquearTarjetas(){
    for (let i= 0;i<=23;i++){
        let tarjetaBloqueada = document.getElementById(i);
        tarjetaBloqueada.innerHTML = numeros[i]
        tarjetaBloqueada.disabled = true;
    }
}

//FUNCION PRINCIPAL
function destapar(id){

    if(temporizador == false){
    contarTiempo();
    temporizador = true;
    }
    
    tarjetasDestapadas++;
    console.log(tarjetasDestapadas);

    if(tarjetasDestapadas == 1){
        //Mostrar primer numero
        tarjeta1= document.getElementById(id);
        primerResultado=numeros[id]
        tarjeta1.innerHTML = primerResultado;
        

        //Desahabilitar primer botton
        tarjeta1.disabled = true;
    }else if(tarjetasDestapadas ==2){
        //Mostrar segundo numero
        tarjeta2 = document.getElementById(id);
        segundoResultado = numeros[id];
        tarjeta2.innerHTML = segundoResultado;

        //Deshabilitar segundo boton
        tarjeta2.disabled = true;

        //Incrementar movimientos
        movimientos++;
        mostrarMovientos.innerHTML = `movimientos: ${movimientos}`;

        if(primerResultado == segundoResultado){
            //Encerar contador tarjetas destapadas
            tarjetasDestapadas=0;

            //Aumentar Aciertos
            aciertos++;
            mostrarAciertos.innerHTML = `aciertos: ${aciertos}`;

            if(aciertos == 12){
                clearInterval(tiempoRegresivoid);
                mostrarAciertos.innerHTML = `Aciertos: ${aciertos}, GANASTE UN DSCTO DEL 20% , COD:#12345`;
                mostrarTiempo.innerHTML = `Fantastico!📣 Solo demoraste ${timerInicial - timer} segundos`;
                mostrarMovientos.innerHTML = `Movimientos: ${movimientos} 🤟😎`;
                
            }
        }else{
            //Mostrar momeamente valores y volver a tapar
            setTimeout(() => {
                tarjeta1.innerHTML = ' ';
                tarjeta2.innerHTML = ' ';
                tarjeta1.disabled = false;
                tarjeta2.disabled = false;
                tarjetasDestapadas = 0;
            }, 800);
        }
    }
}

const main = () =>{
    board = createBoard(6,4)
    renderizarBoard(board)

    setValue(board,1,1,{
        seMuestra : false,
        emoji : "&#x1f370;" 
    })
    renderizarBoard(board)
}
main()

/*function createBoard(numRows,numCols){
    const rows = []

    for (let i = 0; i< numRows;i++){
        const casillas = []

        //Crear casillas
        for (let j =0 ; j< numCols;j++){
            casillas.push({seMuestra : false,emoji : "&#x1F354;" })
        }
        
        rows.push(casillas)
    }
    return rows
}
function printBoard(board){
    for (let row of board){
        let rowStr = ""
        for (let casilla of row){
            rowStr += casilla + " "
        }
        console.log(rowStr)
    }
}
function setValue(board,row,col,value){
    board[row][col]=value
}
//function getValue(board,row,col){
//COMO DEFINIR FUNCIONES EN JAVASCRIPT
const getValue = (board,row,col) => {
    return board[row][col]
}
//document representa a todo el arbol doom

//const h1= document.getElementById("titulo")
//h1.innerText = "MEMORIA GAME"

//----REFACTORIZAR CODIGO------
const renderizarBoard = (board) => {
    for (let i=0; i<board.length; i++){
        const casillas = board[i]
        for (let j=0; j<casillas.length; j++){
            //INTERPOLACION DE STRINGS
            const butCasilla = document.getElementById(`${i}_${j}`) //string interpolation
            if(casillas[j].seMuestra){
                butCasilla.innerHTML = casillas[j].emoji
            }else{
                butCasilla.innerHTML = ""
            }
            
        }
    }
}
const casillaOnClick = (row,col) => {
    const casilla =getValue(board,row,col)
    casilla.seMuestra = true
    renderizarBoard(board)
}*/













