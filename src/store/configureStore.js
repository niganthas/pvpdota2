import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'

import rootReducer from '../reducers'

export default function configureStore() {
    const middleware = [thunk]
    const store = createStore(
        rootReducer,
        compose(
            applyMiddleware(...middleware),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    )

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextReducer = rootReducer;
            store.replaceReducer(nextReducer);
        });
    }

    return store
}