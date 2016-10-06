export const requestRepos = () => {
  return {
    type: 'REQUEST_REPOS',
  };
};

export const deserializeRepos = (repos) => {
  return {
    type: 'DESERIALIZE_REPOS',
    repos
  };
};

export const requestMembers = () => {
  return {
    type: 'REQUEST_MEMBERS',
  };
};

export const deserializeMembers = (members) => {
  return {
    type: 'DESERIALIZE_MEMBERS',
    members
  };
};

export const makeRequest = (url) => {
  return {
    type: 'API_REQUEST',
    url
  };
};
