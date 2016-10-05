import route from 'ember-redux/route';
// import { requestRepos } from '../reducers/repos';

const model = (dispatch) => {
  return dispatch({ type: 'REQUEST_MEMBERS', org: 'thefrontside' });
  // return dispatch(requestRepos('thefrontside'));
}

export default route({ model })();
