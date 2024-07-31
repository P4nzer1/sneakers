class Person {
    name: string;
    age: number;
  
    constructor(name: string, age: number) {
      this.name = name; // Инициализация свойства name
      this.age = age; // Инициализация свойства age
    }
  
    greet() {
      alert(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }
  
  const person = new Person("John Doe", 30);
  person.greet(); // Выводит: Hello, my name is John Doe and I am 30 years old.
  