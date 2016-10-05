import createSagaMiddleware from 'npm:redux-saga';
import rootSaga from '../sagas/index';

const createSaga = createSagaMiddleware.default ? createSagaMiddleware.default : createSagaMiddleware;
const sagaMiddleware = createSaga();

const setup = () => {
  sagaMiddleware.run(rootSaga);
}

export default {
  middleware: [ sagaMiddleware ],
  setup
};
