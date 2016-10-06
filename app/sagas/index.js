import { getReposAsync } from './repos';
import { getMembersAsync } from './members';
import { watchRequest } from './request';

export default function* rootSaga() {
  yield [
    watchRequest(),
    getReposAsync(),
    getMembersAsync(),
  ]
}
