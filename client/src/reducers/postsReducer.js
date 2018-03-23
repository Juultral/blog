export default function reducers(state = [], action) {
  switch (action.type) {
    case "FETCH_ALL_POSTS": {
      return action.payload;
    }
    case "FETCH_SINGLE_POST": {
      return action.payload;
    }
    case "NEW_POST": {
      return [...state, action.payload];
    }
    default:
      return state;
  }
}
