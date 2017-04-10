import React from 'react';
import { getCookies } from './cookies';

const withCookies = Component =>
  (...props) => <Component cookies={getCookies()} {...props} />;

export default withCookies;
