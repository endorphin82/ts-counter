import { createStore } from "redux";
import { rootReducer } from "../reducer"
import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction"

const composeEnhancers = composeWithDevTools();

const store = createStore(rootReducer, {}, composeEnhancers);

export default store;