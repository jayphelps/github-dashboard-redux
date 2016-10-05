import immutable from 'npm:immutable';

const { Record, List } = immutable;

const Member = Record({
  id: undefined,
  name: '',
  company: '',
  email: '',
  bio: '',
  avatarUrl: '',
});

const initialState = new List();

export default function(state = initialState, action) {
  switch(action.type) {
    case 'DESERIALIZE_MEMBERS': {
      let rawMembers = action.members;
      let members = rawMembers.map(member => {
        member.avatarUrl = member['avatar_url'];
        return new Member(member);
      });
      return state.push(...members);
    }

    default:
      return state;
  }
}
