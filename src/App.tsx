import React from 'react';
import { View, Text } from 'react-native';
import AppNavigator from './navigation/AppNavigator';
import SplashScreen from './screens/login/SplashScreen';
import { enableScreens } from 'react-native-screens';
   enableScreens();

const App: React.FC = () => {
    const isLoggedIn = true; // Set to false for initial state

    return (
        <View style={{ flex: 1 }}>
            {isLoggedIn ? <AppNavigator /> : <SplashScreen />}
        </View>
    );
};

export default App;
