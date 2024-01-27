class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getName() {
        return this.firstName + '' + this.lastName;
    }
}

const alireza = new Person('Alireza', 'Moradi');
console.log(alireza.getName());

const hamid = new Person('Hamidreza', 'Kamalzade');
console.log(hamid.getName());

const kamyab = new Person('Kamyab', 'Valipour');
console.log(kamyab.getName());

// Object Instantiation