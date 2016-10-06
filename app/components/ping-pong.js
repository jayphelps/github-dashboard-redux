import connect from 'ember-redux/components/connect';
import Ember from 'ember';

const mapStateToComputed = (state) => {
  return {
    ping: state.ping
  };
};

const mapDispatchToActions = (dispatch) => {
  return {
    ping: () => dispatch({ type: 'PING' })
  }
}

const PingPong = Ember.Component.extend({});

export default connect(mapStateToComputed, mapDispatchToActions)(PingPong);
