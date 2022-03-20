import { createStore, combineReducers } from "redux";
import reducerCalculator from "./calculator/calculator.reducer";

function reducer(state = [], action) {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, action.payload];
    default:
      return state;
  }
}

const rootReducer = combineReducers({
    calculator: reducerCalculator
});

const store = createStore(rootReducer);

export { store };
