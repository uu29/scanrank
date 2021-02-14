import { createWrapper } from "next-redux-wrapper";
import { applyMiddleware, createStore, compose, Store, AnyAction } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware, { Task } from "redux-saga";
import modules, { State } from "./modules";

export interface SagaStore extends Store<State, AnyAction> {
  sagaTask: Task;
}

const loggerMiddleware = ({ dispatch, getState }) => (next) => (action) => {
  return next(action);
};

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware, loggerMiddleware];
  const enhancer =
    process.env.NODE_ENV === "production"
      ? compose(applyMiddleware(...middlewares))
      : composeWithDevTools(applyMiddleware(...middlewares));
  const store = createStore(modules.rootReducer, enhancer);
  (store as SagaStore).sagaTask = sagaMiddleware.run(modules.rootSagas);
  return store;
};

const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === "development",
});

export default wrapper;
