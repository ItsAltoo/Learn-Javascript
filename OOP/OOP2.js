function Employee(nama) {
  this.nama = nama;
}

function Manager(nama) {
  this.nama = nama;
}

Manager.prototype = Object.create(Employee.prototype);

Manager.prototype.sayHello = function (nama) {
  console.log(`Hello ${nama}, my name is Manager ${this.nama}`);
};

Employee.prototype.sayHello = function (nama) {
  console.log(`Hello ${nama}, my name is Employee ${this.nama}`);
};

const udin = new Employee("Udin");
udin.sayHello("yuna");

const malik = new Manager("Malik");
malik.sayHello("yui");

console.log(udin);
console.log(malik);
