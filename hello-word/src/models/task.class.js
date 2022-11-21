import { LEVELS } from "./levels.enum"

export class TaskClass{
    name = ''
    description = ''
    complete = false
    level = LEVELS.URGENT

    constructor(name, description, complete, level){
        this.name = name
        this.description = description
        this.complete = complete
        this.level = level
    }
}