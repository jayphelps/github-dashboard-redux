import route from 'ember-redux/route';
import { requestMembers } from '../actions/index';

const model = (dispatch) => {
  return dispatch(requestMembers());
}

export default route({ model })();
