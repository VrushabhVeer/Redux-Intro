import { legacy_createStore } from "redux";
import { reducer } from "./Reducer";

const store = legacy_createStore(reducer, { counter: 1 });

export { store };