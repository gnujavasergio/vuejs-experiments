export default class Employee {
    constructor(id, firstName, lastName, profession, salary, skills = []){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.profession = profession;
        this.salary = salary;
        this.skills = skills;
    }
}