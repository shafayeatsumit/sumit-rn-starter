import status from './status';

const rehydrated = (state = false, action) => {
  switch (action.type) {
    case 'persist/REHYDRATE':
      return true;
    default:
      return state;
  }
};

// const status = () => ({
//   loading: false,
//   info: null,
//   error: null,
//   success: null,
// });

const member = () => ({
  loading: false,
  error: null,
});

export default {
  rehydrated,
  status,
  member,
};
