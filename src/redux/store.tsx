import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import sagas from './root_sagas';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
// import logger from 'redux-logger';
import rootReducer from './rootReducer';
export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();

const middlewares = [ sagaMiddleware ];

export function configureStore(initialState:any){
    const composeEnhancers =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(
        rootReducer,
        initialState,
        composeEnhancers(
            applyMiddleware(routerMiddleware(history), ...middlewares)
        )
    );
    sagaMiddleware.run(sagas, {});
    return store;
}