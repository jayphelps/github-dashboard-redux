import { getReposAsync } from './repos';
import { getMembersAsync } from './members';

export default function* rootSaga() {
  yield [
    getReposAsync(),
    getMembersAsync(),
  ]
}
