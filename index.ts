function sayHello(): void {
    alert('Hello, World!');
}

document.getElementById("helloButton")?.addEventListener("click", sayHello);
