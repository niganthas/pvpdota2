import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

const rootReducer = combineReducers({
    // appHandler,
    // listHandler,
    // menuHandler,
    // windowHandler,
    routing
});

export default rootReducer;