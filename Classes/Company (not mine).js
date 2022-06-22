class Company {
    constructor() {
        this.departments = new Map()
    }
 
    addEmployee(name, salary, position, department) {
 
        if (name == "" || salary == "" || salary < 0 || position == "", department == "") {
            throw new Error("Invalid input!")
        } else {
            const newEmployee = {
                name: 
                salary,
                position,
                department
            }
 
 
            if (!this.departments.has(department)) {
                this.departments[department] = []
            } 
            this.departments[department].push(newEmployee)
 
            // return `New employee is hired. Name: ${name}. Position: ${position}`
        }
    }
 
    bestDepartment() {
 
        //find department with highest average salary
        // -- new Map() with department: average salary 
        // -- get list from this.departments 
        // -- sort by salary (discending) & names ascending 
        //sort list salaries in discending order order
        //sort list names in ascending order
 
        let iterable = this.departments.entries()
 
        for (const [key, value] of iterable) {
            console.log(`${key}`)
            
        }
 
 
    }
 
   toString() {
    console.log(this.departments)
   }
 
    
}
 
 
let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction")
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction")
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
c.bestDepartment();