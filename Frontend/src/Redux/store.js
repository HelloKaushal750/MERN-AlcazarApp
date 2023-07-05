import {legacy_createStore as createStore} from 'redux'
import reducer from './reducer'


export const store = createStore(reducer)

store.subscribe(()=>{
    console.log(store.getState());
})