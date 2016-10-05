import Ember from 'ember';
import fetch from 'ember-network/fetch';
import saga from 'npm:redux-saga';
import effects from 'npm:redux-saga/effects';
const { takeEvery } = saga;
const { call, put } = effects;

const { RSVP } = Ember;

const getMembersList = (org) => {
  return fetch(`https://api.github.com/orgs/${org}/members`)
    .then(res => res.json());
};

const lookupMemberInfo = (membersList) => {
  let promises = membersList.map(member => fetch(member.url));
  return RSVP.map(promises, (member) => member.json());
};

function* fetchMembers(action) {
  const membersList = yield(call(getMembersList, action.org));
  const members = yield(call(lookupMemberInfo, membersList));
  yield put({ type: 'DESERIALIZE_MEMBERS', members });
}

export function* getMembersAsync() {
  yield takeEvery('REQUEST_MEMBERS', fetchMembers);
}
