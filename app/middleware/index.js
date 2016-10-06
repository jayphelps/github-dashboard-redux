import createSagaMiddleware from 'npm:redux-saga';
import reduxRX from 'npm:redux-observable';

const { createEpicMiddleware } = reduxRX;

import rootSaga from '../sagas/index';
import { pingEpic } from '../epics/index';

const resolveImport = (middleware) => middleware.default ? middleware.default: middleware;

const createSaga = resolveImport(createSagaMiddleware);
const createEpic = resolveImport(createEpicMiddleware);

const sagaMiddleware = createSaga();
const epicMiddleware = createEpic(pingEpic);

const setup = (store) => {
  sagaMiddleware.run(rootSaga);
  // This is needed to make the devtools work with redux-observable
  if (window.devToolsExtension) {
    window.devToolsExtension.updateStore(store);
  }
}

export default {
  middleware: [ sagaMiddleware, epicMiddleware ],
  setup
};
