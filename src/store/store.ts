import { createStore, applyMiddleware } from "redux";
import reduces from "./reduces/root-reduce";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/root-saga";

const sagaMiddlewart = createSagaMiddleware();

export default createStore(reduces, {}, applyMiddleware(sagaMiddlewart));

sagaMiddlewart.run(rootSaga);