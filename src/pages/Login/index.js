import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Login({ history }) {
  const [userName, setUserName] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    history.push(`/Chat/${userName}`);
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            value={userName}
            onChange={e => setUserName(e.target.value)}
            placeholder="Enter with your username"
          />
        </div>
      </form>
    </Container>
  );
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
