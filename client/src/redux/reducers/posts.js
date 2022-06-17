import * as actionTypes from "../actions/actionTypes"

const postsReducer =(state = [], action) => {
  switch (action.type) {
    case actionTypes.UPDATE:
    case actionTypes.LIKE:
      return state.map((post)=> post._id === action.payload._id ? action.payload : post)
    case actionTypes.DELETE:
      return state.filter((post) => post._id !== action.payload )
    case actionTypes.FETCH_ALL:
      return {
        ...state,
        posts: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages
      }
    case actionTypes.FETCH_BY_SEARCH:
      return {
        ...state,
        posts: action.payload
      }  
    case actionTypes.CREATE:
      return [...state,action.payload];
    default:
      return state;
  }
};

export default postsReducer