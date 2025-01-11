import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import AppNavigator from './navigation/AppNavigator';
import LoginNavigator from './navigation/LoginNavigator';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import SplashScreen from './screens/login/SplashScreen';
import { GOOGLE_WEB_CLIENT_ID, GOOGLE_IOS_CLIENT_ID } from '@env';
import { enableScreens } from 'react-native-screens';
   enableScreens();

const App: React.FC = () => {
    useEffect(() => {
        GoogleSignin.configure({
          webClientId: GOOGLE_WEB_CLIENT_ID,
          iosClientId: GOOGLE_IOS_CLIENT_ID,
          offlineAccess: true,
          scopes: ['profile', 'email'],
        });
      }, []);

    const isLoggedIn = false; // Set to false for initial state

    return (
        <View style={{ flex: 1 }}>
            {isLoggedIn ? <AppNavigator /> : <LoginNavigator />}
        </View>
    );
};

export default App;
