import React, { useEffect } from 'react';
import { View } from 'react-native';
import AppNavigator from './navigation/AppNavigator';
import LoginNavigator from './navigation/LoginNavigator';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { GOOGLE_WEB_CLIENT_ID, GOOGLE_IOS_CLIENT_ID } from '@env';
import { enableScreens } from 'react-native-screens';
import { AuthProvider, useAuth } from './contexts/AuthContext';

enableScreens();

const MainApp: React.FC = () => {
  const { isLoggedIn } = useAuth();

  return <View style={{ flex: 1 }}>{isLoggedIn ? <AppNavigator /> : <LoginNavigator />}</View>;
};

const App: React.FC = () => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: GOOGLE_WEB_CLIENT_ID,
      iosClientId: GOOGLE_IOS_CLIENT_ID,
      offlineAccess: true,
      scopes: ['profile', 'email'],
    });
  }, []);

  return (
    <AuthProvider>
      <MainApp />
    </AuthProvider>
  );
};

export default App;