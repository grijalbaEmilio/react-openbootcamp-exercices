import React from "react";
import propTypes from 'prop-types'

import { TaskClass } from "../../models/task.class";
import { LEVELS } from "../../models/levels.enum";
import TaskComponent from "../pure/task";

const TaskListComponent = ({task}) =>{

    const defaultTask = new TaskClass("Example", "default description", false, LEVELS.NORMAL )
    return (
    <div>
        <div>
            your task: 
        </div>
        {/*  apply map for print tack list */}

        <TaskComponent task={defaultTask} />
    </div>

    )
}


export default TaskListComponent;