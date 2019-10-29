import {createStore} from 'redux';

let initialState = {
    name: "Anonymous",
    password: ""
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SIGN_IN":
        return {
          ...action.data
        };
      default:
        return state;
    }
  };
  
  const store = createStore(
    userReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  
  export default store;