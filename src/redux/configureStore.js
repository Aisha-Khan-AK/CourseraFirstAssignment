import { createStore, combineReducers, applyMiddleware } from "redux";
import { Leaders } from "./leaders";
import { Comments } from "./comments";
import { Dishes } from "./dishes";
import { Promotions } from "./promotions";
import thunk from "redux-thunk";
import logger from "redux-logger";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      dishes: Dishes,
      comments: Comments,
      promotions: Promotions,
      leaders: Leaders,
    }),
    applyMiddleware(thunk, logger)
  );
  return store;
};
