function Person() {
  this.name = "";
  this.age = "";
  this.sayHello = function (name) {
    console.log(`Hello ${name},my name is ${this.name}`);
  };
}

const object = {
  name: "malik",
  age: 18,
  hobby: "wkwkwk",
};

const malik = new Person();
malik.name = "malik";
malik.age = 12;
malik.sayHello("Yuki");

console.info(malik);

function NewPerson(name, age) {
  this.name = name;
  this.age = age;
  this.sayHello = function (name) {
    console.log(`Hello ${name},my name is ${this.name}`);
  };
}

const newMalik = new NewPerson("Kuro", 15);
newMalik.sayHello("Rikka");

console.log(newMalik);

function Employed(name) {
  this.name = name;
  this.sayHello = function (yourName) {
    console.log(`hello ${yourName}, my name is ${this.name}`);
  };
}

function Manage(firstName, lastName) {
  Employed.call(this, firstName);
  this.lastName = lastName;
}

const akbar = new Manage("Malik", "akbar");
akbar.sayHello("Yui");
console.log(akbar);

akbar.sayBay = function () {
  console.log("Bye");
};

Manage.prototype.sayBye = function () {
  console.log("Good Bye");
};

Manage.prototype.run = function () {
  console.log(`${this.firstName} is running...`);
};
