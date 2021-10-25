import React, { useEffect, useContext } from 'react';
import { withAuthenticator } from 'aws-amplify-react-native';
import Amplify from 'aws-amplify';
import awsExports from './aws-exports';
import { DarkTheme, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
Amplify.configure(awsExports);
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { UserProvider } from './src/context/UserContext';
import Authentication from './src/components/Authentication';
import { View } from 'react-native';
import Navbar from './src/components/Navbar';

const BaseTheme = {
  ...DarkTheme,
  myOwnProperty: true,
  fontFamily: 'Roboto',
  colors: {
    plPurple: '#4E389D',
    plYellow: '#FBB040',
    plGreen: '#86C641',
    plPink: '#F173AC',
    plOrange: '#F58220',
    background: 'black',
  },
};

const App = () => {
  return (
    <SafeAreaProvider>
      <PaperProvider theme={BaseTheme}>
        <UserProvider>
          <Navbar></Navbar>
          <Authentication style={{ backgroundColor: 'black' }}></Authentication>
        </UserProvider>
      </PaperProvider>
    </SafeAreaProvider>
  );
};

export default withAuthenticator(App);
