import { TaskClass } from "../../../models/task.class";
import propTypes from 'prop-types'


const TaskComponent = ({task}) =>{
    return (
    <div>
        <h2>
            Nombre: { task.name }
        </h2>
        <h3>
            Descripción: { task.description }
        </h3>
        <h4>
            Nivel: { task.level }
        </h4>
        <h5>
            Esta tarea esta: { task.complete ? "complete": "incompleta"} 
        </h5>
    </div>
    )
}

TaskComponent.propTypes = {
    task: propTypes.instanceOf(TaskClass)

}

export default TaskComponent;