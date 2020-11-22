// todo:write code to define and export the employee class
const Employee = require("../employee.js");

class Employee  {
    constructor(name, id , email){
        this.name = name;
        this.id = id;
        this.email = email;
        this.getName = function(name) {
            this.firstname = name;
        }
        this.getId = function(id) {
            this.id = id;
        }
        this.getEmail = function(email) {
            this.email = email;
        }
        this.getRole = function(Employee) {
            this.role = Employee; 
        }
       
        
}};
module.exports = employee;