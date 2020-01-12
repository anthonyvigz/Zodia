// import {
// } from '../actions/index';


let initialState = {
    user: {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        },
    token: '',
}

// /* persistent storage */

// // const persistedState = localStorage.getItem('reduxState');

// // if (persistedState) {
// //     initialState = JSON.parse(persistedState)
// // }

// /* reducer */

const reducer = (state = initialState, action) => {
    switch(action.type) {

        default: {
            return state;
        }
    }
}

export default reducer;
