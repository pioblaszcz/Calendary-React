import React from 'react';
import { ThemeProvider } from 'styled-components';
import { connect } from 'react-redux';

import { Calendary, CalendaryInformation, AddEventComponent, SettingsComponent } from './components';

import { DefaultStylesApp, theme } from './DefaultStylesApp';

function App({ isWhite }) {

  return (
    <ThemeProvider theme={theme}>
      <DefaultStylesApp isWhite={isWhite}>
        <Calendary />
        <SettingsComponent />
        <CalendaryInformation />
        <AddEventComponent />
      </DefaultStylesApp>
    </ThemeProvider>
  );
}

const mapStateToProps = state => ({
  isWhite: state.isWhite,
})

export default connect(mapStateToProps, null)(App);
