import fetch from 'ember-network/fetch';
import effects from 'npm:redux-saga/effects';
const { take, actionChannel, call, put } = effects;

export function* watchRequest() {
  // Create a channel for all API_REQUEST actions
  const requestChannel = yield actionChannel('API_REQUEST');

  while (true) {
    // extract an action from the channel and call handleRequest
    const { url } = yield take(requestChannel);
    yield call(handleRequest, url);
  }
}

function* handleRequest(url) {
  let response = yield fetch(url).then(res => res.json());
  // Signify that the request succeeded and broadcast the response
  yield put({ type: 'REQUEST_SUCCEEDED', response })
}
