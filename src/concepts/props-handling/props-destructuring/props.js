// Props Destructuring using object destructuring

const user = {
    firstName: 'Alireza',
    lastName: 'Moradi'
};
//instead of these

// const firstName = user.firstName;
// const lastName = user.lastName;

//we can use this
const {firstName, lastName} = user;
console.log(firstName);