import { connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { combineReducers } from 'redux';
import Authentication from './authentication/reducers';

export const history = createBrowserHistory();
//reset the state
const appReducers= combineReducers({
    Authentication,
    router: connectRouter(history),
});
const rootReducer = (state: any, action: any) => {
    return appReducers(state,action);
  };
  export default rootReducer;