import fetch from 'ember-network/fetch';
import saga from 'npm:redux-saga';
import effects from 'npm:redux-saga/effects';
const { takeEvery } = saga;
const { call, put } = effects;

import { deserializeRepos } from '../reducers/repos';

const githubRepos = (org) => {
  return fetch(`https://api.github.com/orgs/${org}/repos`)
    .then(response => response.json());
};

function* fetchRepos(action) {
  const repos = yield call(githubRepos, action.org);
  yield put(deserializeRepos(repos));
}

export function* getReposAsync() {
  yield takeEvery('REQUEST_REPOS_FOR_ORG', fetchRepos);
}
