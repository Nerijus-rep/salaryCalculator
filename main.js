var Salary = function (baseSalary) {
  this.baseSalary = baseSalary;
};

Salary.prototype.calculateSalary = function() {
  console.log("Mechaniko bazine alga yra " + this.baseSalary * professionMultipliers.mechanic +" €");
  console.log("Programuotojo bazine alga yra " + this.baseSalary * professionMultipliers.developer +" €");
  console.log("Daktaro bazine alga yra " + this.baseSalary * professionMultipliers.doctor +" €");
  console.log("Profesoriaus bazine alga yra " + this.baseSalary * professionMultipliers.professor +" €");
};

var baseSalary = new Salary(800);

var professionMultipliers = {
  "mechanic": 2,
  "developer": 3,
  "doctor": 4,
  "professor": 5,
}

baseSalary.calculateSalary();

console.log(baseSalary instanceof Salary);
