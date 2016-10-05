export const requestRepos = (org) => {
  return {
    type: 'REQUEST_REPOS_FOR_ORG',
    org
  }
}

export const deserializeRepos = (repos) => {
  return {
    type: 'DESERIALIZE_REPOS',
    repos
  }
}

export default function repos(state = [], action) {
  switch(action.type) {
    case 'DESERIALIZE_REPOS': {
      let repos = action.repos;
      console.log(repos);
      return repos.map(repo => {
        return { name: repo.name };
      });
    }

    case 'SAY_HELLO':
      console.log("Hello world!");
      return state;

    default:
      return state;
  }
}
