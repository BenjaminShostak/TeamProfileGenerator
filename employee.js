// todo:write code to define and export the employee class
const Employee = require("/employee.js");

class Employee  {
    constructor(name, id , email, getname){
        this.name = name;
        this.id = id;
        this.email = email;
        this.getname = function(name) {
            this.firstname = name;
        }
        this.getid = function(id) {
            this.id = id;
        }
}

module.exports = Employee;