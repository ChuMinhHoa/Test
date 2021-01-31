import {employee} from "./employee.js"
import {manager} from "./manager.js"
import {test} from "./test.js"
import {developer} from "./developer.js"





let new_manager = new manager("hoa",["an","ngu"],["v","l"])
new_manager.addEmployee("n")
console.log(new_manager)

let new_developer = new developer("dd",["code"])
console.log(new_developer)

let new_test = new test("tester",["testing"])
console.log(new_test)