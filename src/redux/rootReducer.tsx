import { connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { combineReducers } from 'redux';


export const history = createBrowserHistory();
//reset the state
const appReducers= combineReducers({
    router: connectRouter(history),
});
const rootReducer = (state: any, action: any) => {
    return appReducers(state,action);
  };
  export default rootReducer;