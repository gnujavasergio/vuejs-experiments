export default class Employee {
    id = '';
    constructor(id, firstName, lastName, profession, salary, skills = []){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.profession = profession;
        this.salary = salary;
        this.skills = skills;
    }
}