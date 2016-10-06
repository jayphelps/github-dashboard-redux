import immutable from 'npm:immutable';

const { Record } = immutable;

const Ping = Record({
  isPinging: false
});

export default function ping(state = new Ping(), action) {
  switch (action.type) {
    case 'PING':
      return state.set('isPinging', true)

    case 'PONG':
      return state.set('isPinging', false)

    default:
      return state;
  }
}
