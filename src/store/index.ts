import {createStore} from "redux";
import {rootReducer} from "../reducer"
import {composeWithDevTools} from "redux-devtools-extension/logOnlyInProduction"
import * as actions from "../ac"

const composeEnhancers = composeWithDevTools();

const store = createStore(rootReducer, {}, composeEnhancers);

//Typing sync actions https://gist.github.com/dmitriy-novikov/f27bfdd23fe0bf2188b221c255b9e963
type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;
// export type ActionsTypes<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<InferValueTypes<typeof actions>>;
export type ActionsTypes = ReturnType<InferValueTypes<typeof actions>>;

export default store;