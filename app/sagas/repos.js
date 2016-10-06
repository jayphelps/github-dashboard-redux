import fetch from 'ember-network/fetch';
import saga from 'npm:redux-saga';
import effects from 'npm:redux-saga/effects';
const { takeEvery } = saga;
const { call, put } = effects;

import { deserializeRepos } from '../actions/index';

const githubRepos = () => {
  return fetch(`https://api.github.com/orgs/thefrontside/repos`)
    .then(response => response.json());
};

function* fetchRepos() {
  const repos = yield call(githubRepos);
  yield put(deserializeRepos(repos));
}

export function* getReposAsync() {
  yield takeEvery('REQUEST_REPOS_FOR_ORG', fetchRepos);
}
