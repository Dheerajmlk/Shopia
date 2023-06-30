import {createStore} from "redux"

export function RootReducer(){
    return "Root Reducer is called"
}

const store = createStore(RootReducer)
export default store