class Company {
    constructor() {
        this.departments = new Map();
    }

    addEmployee(name, salary, position, department) {
        //throw error for invalid parameters
        if (!name || !salary || !position || !department || salary < 0) {
            throw new Error('Invalid input!');
        }
        //create department if such does not exist yet
        if (!this.departments.has(department)) {
            //each department is a map, containing an employees map and an AvgSalary property
            this.departments.set(department, new Map());
            this.departments.get(department).set('AvgSalary', 0);
            this.departments.get(department).set('Employees', new Map());
        }
        //add employee - each employee is a map, containing position and salary properties
        this.departments.get(department).get('Employees').set(name, new Map());
        this.departments.get(department).get('Employees').get(name).set('position', position);
        this.departments.get(department).get('Employees').get(name).set('salary', salary);

        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {
        let bestDepartment = '';
        //calculate avgSalary for each department - created separate function for easier readability
        for (const department of this.departments.keys()) {
            this.calculateAvgSalary(department);
        }

        //sort the departments by AvgSalary in descending order, so that first dept will be the best dept
        let sortedDepts = Array.from(this.departments.keys()).sort((a, b) => this.departments.get(b).get('AvgSalary') - this.departments.get(a).get('AvgSalary'));
        bestDepartment = sortedDepts[0];

        //print - collect all lines in printResult and finally join printResult by \n
        let printResult = [`Best Department is: ${bestDepartment}`,
        `Average salary: ${this.departments.get(bestDepartment).get('AvgSalary').toFixed(2)}`];

        //sort the employees by the two criteria
        let sortedEmployees = Array.from(this.departments.get(bestDepartment).get('Employees').keys()).sort((a, b) => {
            if (this.departments.get(bestDepartment).get('Employees').get(a).get('salary') < this.departments.get(bestDepartment).get('Employees').get(b).get('salary')) {
                return 1;
            } else if (this.departments.get(bestDepartment).get('Employees').get(a).get('salary') === this.departments.get(bestDepartment).get('Employees').get(b).get('salary')) {
            return a.localeCompare(b); 
            } 
                return -1;
        })

        //add info for each employee into the printResult array
        for (const employee of sortedEmployees) {
            printResult.push(`${employee} ${this.departments.get(bestDepartment).get('Employees').get(employee).get('salary')} ${this.departments.get(bestDepartment).get('Employees').get(employee).get('position')}`)
        };

        return printResult.join('\n');
    }

    calculateAvgSalary(department) {
        let allSalaries = [];
        let allEmployees = this.departments.get(department).get('Employees').keys();

        for (const employee of allEmployees) {
            let employeeSalary = this.departments.get(department).get('Employees').get(employee).get('salary');
            allSalaries.push(employeeSalary);
        }
        //calculate the average by summing all salaries (via reduce) and then dividing by the number of salaries
        this.departments.get(department).set('AvgSalary', allSalaries.reduce((a, b) => a + b) / allSalaries.length);
    }

}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
