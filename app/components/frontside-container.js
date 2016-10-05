import connect from 'ember-redux/components/connect';
import Ember from 'ember';

const mapStateToComputed = (state) => {
  return {
    members: state.members
  };
};

// const mapDispatchToActions = (dispatch) => {
//   return {
//
//   }
// }

const FrontsideContainer = Ember.Component.extend({});

export default connect(mapStateToComputed)(FrontsideContainer);
