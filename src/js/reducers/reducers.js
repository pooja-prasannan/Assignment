import { ADD_ARTICLE } from "../constants/action-types";

const initialState = {
  jsonData: []
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }

  if (action.type === "DATA_LOADED") {
    console.log("state", state);
    console.log("action.payload", action.payload);
    return Object.assign({},  state, {
      jsonData: state.jsonData.concat(action.payload)
    });


  }

  return state;
}

export default rootReducer;
