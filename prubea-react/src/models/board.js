let board; //global
const arrEmojiDisponibles=["🐯","🦒","🦊","🐸","🐨"]



function createBoard(numRows,numCols){
    //CREANDO ARREGLO DE EMOJIS DEL TABLERO
    const arrEmojis = []
    for (let emoji of arrEmojiDisponibles){
        arrEmojis.push(emoji)
        arrEmojis.push(emoji)
    }
    const rows = []

    for (let i = 0; i< numRows;i++){
        const casillas = []

        //Crear casillas
        for (let j =0 ; j< numCols;j++){
            const posAleatoria =Math.floor(Math.random() * (arrEmojis.length - 1))
            
            //SACAMOS EMOJI DEL ArrEmojis
            const emoji = arrEmojis.splice(posAleatoria,1)[0]

            casillas.push({seMuestra : false,emoji})
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
export default createBoard














