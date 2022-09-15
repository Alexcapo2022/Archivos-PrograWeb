let board; //global



function createBoard(numRows,numCols){
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













