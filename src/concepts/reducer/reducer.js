// (state, action) => newState;
// const action = {  type : ''  }

const action = {
    type: 'INCREASE',
    payload: 5
}
const counterReducer = (state, action) => {
    switch (action.type) {
        case 'INCREASE':
            return {...state, count: state + action.payload};
        case 'DECREASE':
            return {...state, count: state - action.payload};
        default:
            return state;
    }
}

const result = counterReducer(0, action);
console.log(result);