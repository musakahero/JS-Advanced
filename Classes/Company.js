class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        if (!name || !salary || !position || !department || salary < 0) {
            throw new Error('Invalid input!');
        }

        if (!this.departments.hasOwnProperty(department)) {
            this.departments[department] = {};
            this.departments[department]['avgSalary'] = 0;
        }

        this.departments[department][name] = {};
        this.departments[department][name]['position'] = position;
        this.departments[department][name]['salary'] = Number(salary);

        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {
        //calculate average salaries for each dept
        for (const dept in this.departments) {
            this.calcAvgSalary(this.departments[dept]);
            // console.log(`${dept} => ${this.departments[dept].avgSalary}`);
        }

        //find the best dept
        let allDepts = Object.keys(this.departments);
        let bestDept = allDepts.reduce((a, b) => this.departments[a].avgSalary > this.departments[b].avgSalary ? a : b);

        //sort employees in dept
        let bestEmployees = Object.keys(this.departments[bestDept]).filter(a => a != 'avgSalary').sort((a, b) => {
            if (this.departments[bestDept][a].salary < this.departments[bestDept][b].salary) {
                return 1;
            } else if (this.departments[bestDept][b].salary === this.departments[bestDept][a].salary){
                return a.localeCompare(b);
            } 
            return -1;
        });


        //print
        let result = [];
        result.push(`Best Department is: ${bestDept}`);
        result.push(`Average salary: ${(this.departments[bestDept].avgSalary).toFixed(2)}`);

        for (const employee of bestEmployees) {
            result.push(`${employee} ${this.departments[bestDept][employee].salary} ${this.departments[bestDept][employee].position}`);
        }

        return result.join('\n');
    }

    calcAvgSalary(department) {
        let allSalaries = [];

        for (const employee in department) {
            //console.log(employee);
            if (employee != 'avgSalary') {
                let salary = department[employee].salary;
                allSalaries.push(salary);
            }
        }
        department.avgSalary = allSalaries.reduce((a, b) => a + b) / allSalaries.length;
    }
}


//input
let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
