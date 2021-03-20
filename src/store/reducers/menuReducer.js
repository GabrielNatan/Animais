const initialState = {
    open: false
  };
  export const menuReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'OPEN_MENU':
        return {
          ...state,
          open: true
        };
        break

        case 'CLOSE_MENU':
        return {
          ...state,
          open: false
        };
        break
      default:
        return state;
    }
  };