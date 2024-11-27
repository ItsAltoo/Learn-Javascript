class Person {
  constructor(name) {
    this.name = name;
    console.log(`Hello ${name}`);
  }

  sayHello(name) {
    console.log(`hello ${name}, my name is ${this.name}`);
  }
}

const malik = new Person("Malik");
const budi = new Person("budi");

console.log(malik);
console.log(malik.name, budi.name);

malik.sayHello("yui");

class Employee {
  constructor(name) {
    this.name = name;
  }
  sayHello(name) {
    console.log(`hello ${name}, my name is Employee ${this.name}`);
  }
}

console.log("");

class Manager extends Employee {
  constructor(firstName, lastName) {
    super(firstName);
    this.lastName = lastName;
  }

  sayHello(name) {
    console.log(`hello ${name}, my name is Manager ${this.firstName}`);
  }
}

const jojo = new Employee("Jojo");
const akbar = new Manager("Akbar", "doing");

akbar.sayHello("YOOO");
console.log(akbar);

jojo.sayHello("Kaneki");
console.log(jojo);

console.log("");

class Budi {
  sayHello(name) {
    console.log(`hallo ${name},me budi`);
  }
}

class Ahmed extends Budi {
  sayHello(name) {
    super.sayHello(name);
    console.log(`hallo ${name},me ahmed`);
  }
}

const fromBudi = new Ahmed();
fromBudi.sayHello("yoi");
