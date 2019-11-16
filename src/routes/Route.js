import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import Detail from '~/pages/Detail';

export default function RouteWrapper({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => (
        <Detail {...props}>
          <Component {...props} />
        </Detail>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};
