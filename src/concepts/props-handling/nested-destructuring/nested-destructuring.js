const user = {
    name: 'Alireza',
    age: 35,
    education: {
        degree: 'master'
    }
};
const {name, education: {degree}} = user;
console.log(name, degree);