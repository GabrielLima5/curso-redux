import { bindActionCreators } from "redux"
import IconButton from "../template/IconButton"
import { connect } from "react-redux"
import { deleteTask, markAsDone, markAsPending } from "./todoActions"

const TodoList = (props) => {
    function renderRows(){
        const list = props.list || []
        
        return list.map(task => (
            <tr key={task._id}>
                <td className={task.done ? 'done' : ''}>{task.description}</td>
                <td>
                    <IconButton style='success' icon='check' hide={task.done} onClick={() => props.markAsDone(task)} />
                    <IconButton style='warning' icon='undo' hide={!task.done} onClick={() => props.markAsPending(task)} />
                    <IconButton style='danger' icon='trash-o' hide={!task.done} onClick={() => props.deleteTask(task)} />
                </td>
            </tr>
        ))
        
    }

    return(
        <table className="table">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className="table-actions">Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

function mapStateToProps(state){
    return{
        list: state.todo.list
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({deleteTask, markAsDone, markAsPending}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)