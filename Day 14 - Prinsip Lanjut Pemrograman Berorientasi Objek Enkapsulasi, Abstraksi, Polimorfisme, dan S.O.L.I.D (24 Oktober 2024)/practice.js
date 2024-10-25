// S: Single Responsibility Principle
class Employee {
    #name
    #role
    #salary
    constructor(name, role, salary) {
        this.#name = name;
        this.#role = role;
        this.#salary = salary;
    }

    getDetails() {
        return `Name: ${this.#name}, Role: ${this.#role}, Salary: ${this.#salary}`;
    }
}

// O: Open-Closed Principle
class Manager extends Employee {
    constructor(name, salary, teamSize) {
        super(name, "Manager", salary);
        this.teamSize = teamSize;
    }
}

// L: Liskov Substitution Principle
function printEmployeeDetail(employee) {
    console.log(employee.getDetails());
}

const employee = new Employee("John", "Developer", 50000);
const manager = new Manager("Jane", 100000, 5);

printEmployeeDetail(employee);
printEmployeeDetail(manager);


// I: Interface Segregation Principle
class Printable {
    print() {
        console.log("Printing...")
    }
}

class EmployeeReport extends Printable{
    constructor(employee) {
        super()
        this.employee = employee
    }

    print() {
        console.log(`Printing Report for ${this.employee.getDetails()}`)
    }
}
const report = new EmployeeReport(employee)
report.print()


// D: Dependency Inversion Principle
class ReportService {
    constructor(printer) {
        this.printer = printer;
    }

    generateReport() {
        this.printer.print()
    }
}
const print = new Printable();
const reportService = new ReportService(report)
reportService.generateReport()
