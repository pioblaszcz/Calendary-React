import React from 'react';

import { Calendary } from './components';
import { CalendaryInformation } from './components'

import StyleProvider from './StyleProvider';

function App() {
  return (
    <StyleProvider>
      <Calendary />
      <CalendaryInformation />
    </StyleProvider>
  );
}

export default App;
