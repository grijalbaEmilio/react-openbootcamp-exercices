import { ContactClass } from '../models/contact.class'
import { ComponentB } from './componentB'


const ComponentA = () =>{
    //const contact = new ContactClass("Juand", "Cruz", "juan@gmail.com", false)

    const contact = new ContactClass("Juand", "Cruz", "juan@gmail.com", true)

    return (
    <div>
        <ComponentB contact = {contact}/>
    </div>
    )
}


export default ComponentA;