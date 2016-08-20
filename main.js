var Salary = function (baseSalary, tax) {
  this.baseSalary = baseSalary;
  this.tax = tax;
  this.calculateSalary = function (profession) {
    if (profession === "mechanic") {
      this.multiplier = 1.8;
    } else if (profession === "developer") {
      this.multiplier = 2.8;
    } else if (profession === "doctor") {
      this.multiplier = 3.2;
    } else if (profession === "professor") {
      this.multiplier = 3.95;
    }
    return (profession) + " Salary is: " + (this.baseSalary * this.multiplier - (this.tax * this.baseSalary * this.multiplier) + ' €');
  }
}

var salaryCalculator = new Salary(800, 0.30);

var salary = salaryCalculator.calculateSalary("mechanic");
var salary1 = salaryCalculator.calculateSalary("developer");
var salary2 = salaryCalculator.calculateSalary("doctor");
var salary3 = salaryCalculator.calculateSalary("professor");

console.log(salary, "\n" + salary1, "\n" + salary2, "\n" + salary3);
