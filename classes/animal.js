export class Animal {
    _name = '';
    constructor(name){
        this._name = name;
    }

    get name () {
        return this._name.toUpperCase();
    }

    set name(newName) {
        this._name = newName;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

