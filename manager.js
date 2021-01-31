import {employee} from "./employee.js"

class manager extends employee{
    
    constructor(name,tasklist,des){
        super(name,tasklist,des)
    }
    addEmployee(e){
        des.push(e)
    }
}