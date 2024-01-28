const user = {
    id: 1,
    firstName: 'Alireza',
    lastName: 'Moradi',
    country: 'Iran',
    city: 'Tehran'
};

const {id, ...userWithoutId} = user;
console.log(userWithoutId)