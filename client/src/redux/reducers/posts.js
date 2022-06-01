import * as actionTypes from "../actions/actionTypes"

const postsReducer =(posts = [], action) => {
  switch (action.type) {
    case actionTypes.UPDATE:
    case actionTypes.LIKE:
      return posts.map((post)=> post._id === action.payload._id ? action.payload : post)
    case actionTypes.DELETE:
      return posts.filter((post) => post._id !== action.payload )
    case actionTypes.FETCH_ALL:
      return action.payload;
    case actionTypes.CREATE:
      return [...posts,action.payload];
    default:
      return posts;
  }
};

export default postsReducer