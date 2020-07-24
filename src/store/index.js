import { createStore } from "redux";
import { ALL_ARTICLES, ALL_TAGS } from "./type";

let initialState = {
  articles: [],
  tags: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ALL_ARTICLES:
      return {
        ...state,
        articles: action.payload,
      };
    case ALL_TAGS:
      return {
        ...state,
        tags: action.payload,
      };
    default:
      return state;
  }
}

export const store = createStore(reducer);
