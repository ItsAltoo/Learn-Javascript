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

class Customer {
  firstName;
  lastName;
  age = 18;

  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  main() {}
}

let customer = new Customer("Nah", "NAhhhhhhhhhh");
console.log(customer);

console.log("");

class privateField {
  #counter = 0;

  increment() {
    this.#counter++;
  }

  decrement() {
    this.#counter--;
  }

  get() {
    return this.#counter;
  }
}

let conter = new privateField();

conter.increment();
conter.increment();
conter.increment();
conter.increment();
conter.increment();

console.log(conter.get());
console.log(conter);

console.log("");

class People {
  say(nama) {
    if (nama) {
      this.#sayHello(nama);
    } else {
      this.#sayWithoutName();
    }
  }

  #sayHello(nama) {
    console.log(`Hello ${nama}`);
  }

  #sayWithoutName() {
    console.log("Hallo");
  }
}

let doSay = new People();
doSay.say();
doSay.say("wajay");

console.log("");

class Main {}

class Index {}

let yui = new Main();
let yuki = new Index();

console.log(typeof yui);
console.log(typeof yuki);

// Cara Mengecek Objek instance yang di buat class
console.log(yui instanceof Main);
console.log(yui instanceof Index);

console.log(yuki instanceof Main);
console.log(yuki instanceof Index);

console.log("");
// Operator instanceof juka mendukung class inheritance

class Loka extends Main {}

let loka = new Loka();

console.log(loka instanceof Main);
console.log(loka instanceof Index);
console.log(loka instanceof Loka);
