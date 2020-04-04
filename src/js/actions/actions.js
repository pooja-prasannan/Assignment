import { ADD_ARTICLE } from "../constants/action-types";
import { DATA_LOADED } from "../constants/action-types";



export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload };
}

export function getData(jsonData) {
  return { type: DATA_LOADED, payload: jsonData};
}

// export function getData() {
//   alert("getdataaaaaaa")
//   return function(dispatch) {
//     return fetch(api)
//       .then(response => response.json())
//       .then(json => {
//         console.log("payload", json)
//         dispatch({ type: "DATA_LOADED", payload: json });
//       });
//   };
// }