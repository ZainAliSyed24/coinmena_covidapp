import * as React from 'react';
import RootNavigator from './navigator';
import {navigatorRef} from './services/NavigationService';

export default function App() {
  return <RootNavigator ref={navigatorRef} />;
}
