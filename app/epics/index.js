import 'npm:rxjs';

export const pingEpic = action$ => {
  return action$.filter(action => action.type === 'PING')
    .delay(1000)
    .mapTo({ type: 'PONG' });
}
