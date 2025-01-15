import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/login/SplashScreen';
import LoginScreen from '../screens/login/LoginScreen';
import UserTypeScreen from '../screens/signup/UserTypeScreen';
import EnterNameScreen from '../screens/signup/EnterNameScreen';
import EnterEmailScreen from '../screens/signup/EnterEmailScreen';
import EnterNumberScreen from '../screens/signup/EnterNumberScreen';
import OtpVerificationScreen from '../screens/login/OtpVerificationScreen';
import OtpVerificationScreen2 from '../screens/signup/OtpVerificationScreen2';
import CategorySelectionScreen from '../screens/signup/CategorySelectionScreen';
import BrandPaymentScreen from '../screens/signup/BrandPaymentScreen';
import VerifyingAccountScreen from '../screens/signup/VerifyingAccountScreen';

const Stack = createStackNavigator();

const LoginNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OtpVerification"
          component={OtpVerificationScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OtpVerification2"
          component={OtpVerificationScreen2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="UserType"
          component={UserTypeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EnterName"
          component={EnterNameScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EnterEmail"
          component={EnterEmailScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EnterNumber"
          component={EnterNumberScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CategorySelection"
          component={CategorySelectionScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BrandPayment"
          component={BrandPaymentScreen}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="VerifyingAccount"
          component={VerifyingAccountScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default LoginNavigator;
