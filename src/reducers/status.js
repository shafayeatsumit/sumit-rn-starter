export const initialState = {
  loading: false,
  info: null,
  error: null,
  success: null,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'STATUS_REPLACE': {
      console.log(action);
      return {
        ...state,
        loading: action.loading || false,
        info: action.info || null,
        error: action.error || null,
        success: action.success || null,
      };
    }
    default:
      return state;
  }
};

export default appReducer;
