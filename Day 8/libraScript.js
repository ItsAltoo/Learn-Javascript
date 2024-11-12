const Person = () => {
  this.name = "";
  this.age = "";
  this.sayHello = function (name) {
    console.log(`Hello ${name},my name is ${this.name}`);
  };
};

export default Person;