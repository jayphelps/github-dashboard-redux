import effects from 'npm:redux-saga/effects';
const { put, take } = effects;

import { deserializeMembers, makeRequest } from '../actions/index';

const membersURL = 'https://api.github.com/orgs/thefrontside/members';

export function* getMembersAsync() {
  while (yield take('REQUEST_MEMBERS')) {
    yield put(makeRequest(membersURL))
    let { response } = yield take('REQUEST_SUCCEEDED');

    let membersList = response.filter(member => member.login !== 'yesno');

    let members = [];

    for (let member of membersList) {
      yield put(makeRequest(member.url))
      let { response: memberInfo } = yield take('REQUEST_SUCCEEDED')
      yield members.push(memberInfo);
    }

    yield put(deserializeMembers(members));
  }
}
