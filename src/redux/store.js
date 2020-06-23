import { createStore } from "redux";
import rootReducer from "./reducers";
import { loadState, saveState } from "./localStorage";
import throttle from "lodash.throttle";

const persistedState = loadState();

const store = createStore(
  rootReducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(
  throttle(() => {
    saveState(store.getState());
  }, 1000)
);

export default store;
