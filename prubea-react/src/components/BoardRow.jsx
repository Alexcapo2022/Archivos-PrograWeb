
import BoardCell from "./BoardCell"

const BoardRow = () => {
    return <div className="row mb-4" style={ { height : "100px"} }>
        <BoardCell />
        <BoardCell />
        <BoardCell />
        <BoardCell />
    </div>
}
export default BoardRow