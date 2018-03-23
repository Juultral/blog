export default function reducers(state = [], action) {
  switch (action.type) {
    case "FETCH_ALL_USERS": {
      return action.payload;
    }
    case "FETCH_SINGLE_USER": {
      return action.payload;
    }
    default:
      return state;
  }
}
