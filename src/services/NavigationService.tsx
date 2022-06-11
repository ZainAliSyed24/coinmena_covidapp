import React from 'react';

const navigatorRef = React.createRef();

const navigate = (routeName, params = {}) =>
  navigatorRef.current?.navigate(routeName, params);

export {navigatorRef, navigate};
