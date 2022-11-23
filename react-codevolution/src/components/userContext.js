import React from 'react';

// adding a default value for context
const UserContext = React.createContext('CodenificenT');

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };

export default UserContext;
