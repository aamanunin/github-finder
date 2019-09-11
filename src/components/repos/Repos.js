import React from 'react';
import Repo from './Repo';
import PropTypes from 'prop-types';

const Repos = ({ repos }) => repos.map(repo => <Repo repo={repo} />);

Repos.propTypes = {
  repos: PropTypes.array.isRequired
};

export default Repos;
