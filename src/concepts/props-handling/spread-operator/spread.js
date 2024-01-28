const profile = {
    firstName: 'Alireza',
    lastName: 'Moradi'
};
const address = {
    country: 'Iran',
    city: 'Tehran'
};
const user = {
    //Spread Operator
    ...profile,
    gender: 'male',
    ...address
}
console.log(user);