import { createStore, applyMiddleware } from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'
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

let thunk = (store) => next => action => {
    
    if(action.type === 'fetch'){
        fetch(action.url).then((res) => res.json()).then(data => store.dispatch(action.fallBack(data)))
    }
    return next(action)
}

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
