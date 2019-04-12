import Animal from './animal.js';

class Dog extends Animal {
    constructor(name) {
        super(name);
    }

    speak() {
        super.speak();
        console.log(`${this.name} barks`);
    }
}

const d = new Dog('Mitzu');
d.speak();

