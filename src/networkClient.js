import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { getCookie } from './core/cookies';
import { REACT_APP_GRAPHQL_ENDPOINT } from './constants/config';

const networkInterface = createNetworkInterface({
  uri: REACT_APP_GRAPHQL_ENDPOINT,
});

networkInterface.use([
  {
    applyMiddleware(req, next) {
      if (!req.options.headers) {
        req.options.headers = {}; // Create the header object if needed.
      }
      // get the authentication token from local storage if it exists
      const token = getCookie('token');
      req.options.headers.authorization = token ? `Bearer ${token}` : null;
      next();
    },
  },
]);

const client = new ApolloClient({
  networkInterface,
  dataIdFromObject: result => {
    if (result.id && result.__typename) {
      return result.__typename + result.id;
    }
    // Make sure to return null if this object doesn't have an ID
    return null;
  },
});

export default client;
