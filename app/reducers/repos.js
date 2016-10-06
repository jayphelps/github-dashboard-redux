export default function repos(state = [], action) {
  switch(action.type) {
    case 'DESERIALIZE_REPOS': {
      let repos = action.repos;
      console.log(repos);
      return repos.map(repo => {
        return { name: repo.name };
      });
    }

    default:
      return state;
  }
}
