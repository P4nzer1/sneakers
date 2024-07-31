var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name; // Инициализация свойства name
        this.age = age; // Инициализация свойства age
    }
    Person.prototype.grrt = function () {
        alert("Hello, my name is ".concat(this.name, " and I am ").concat(this.age, " years old."));
    };
    return Person;
}());
var person = new Person("John Doe", 30);
person.grrt(); // Выводит: Hello, my name is John Doe and I am 30 years old.
