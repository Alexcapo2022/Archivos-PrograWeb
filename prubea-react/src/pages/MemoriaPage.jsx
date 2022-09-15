import Board from "../components/Board"
import Header from "../components/Header"

const MemoriaPage =() => {
    return <div>
        <Header />
        <Board numRows={ 6 } numCols={ 4 }/>
    </div>
}
export default MemoriaPage