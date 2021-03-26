const initialState = {
    user: {}
  };
  export  const loggedUserReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGGED':
        return {
          ...state,
          user: action.payload.user 
        };
        break

        case 'LOGOUT':
        return {
          ...state,
          user: {}
        };
        break
      default:
        return state;
    }
  };