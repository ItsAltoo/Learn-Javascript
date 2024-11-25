function Employee(name) {
  this.name = name;
}

function Manager(name) {
  this.name = name;
}

Manager.prototype = Object.create(Employee.prototype);
