import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home/HomeScreen';
import FavouritesScreen from '../screens/FavouritesScreen';
import MessagesScreen from '../screens/MessagesScreen';
import ProfileScreen from '../screens/ProfileScreen';
import HomeIcon from '../assets/navigation/home.png';
import FavouritesIcon from '../assets/navigation/favorite.png';
import MessagesIcon from '../assets/navigation/chat.png';
import ProfileIcon from '../assets/navigation/profile.png';
import { Image, StyleSheet, View } from 'react-native';
import { normalize } from '../utils/utils';

const Tab = createBottomTabNavigator();

const AppNavigator: React.FC = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator 
                initialRouteName="Home" 
                screenOptions={{ 
                    headerShown: false,
                    tabBarStyle: { 
                        height: normalize(64), 
                        backgroundColor: '#FBFBFB',
                        justifyContent: 'center', 
                        alignItems: 'center'
                    } 
                }}
            >
                <Tab.Screen 
                    name="Home" 
                    component={HomeScreen} 
                    options={{ 
                        tabBarIcon: () => (
                            <Image source={HomeIcon} style={styles.icon} />
                        ),
                        tabBarLabel: () => null 
                    }} 
                />
                <Tab.Screen 
                    name="Favourites" 
                    component={FavouritesScreen} 
                    options={{ 
                        tabBarIcon: () => <Image source={FavouritesIcon} style={styles.icon} />,
                        tabBarLabel: () => null 
                    }} 
                />
                <Tab.Screen 
                    name="Messages" 
                    component={MessagesScreen} 
                    options={{ 
                        tabBarIcon: () => <Image source={MessagesIcon} style={styles.icon} />,
                        tabBarLabel: () => null 
                    }} 
                />
                <Tab.Screen 
                    name="Profile" 
                    component={ProfileScreen} 
                    options={{ 
                        tabBarIcon: () => (
                            <Image source={ProfileIcon} style={[styles.icon, { opacity: 0.6 }]} />
                        ),
                        tabBarLabel: () => null 
                    }} 
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    icon: {
        width: normalize(32),
        height: normalize(32),
        marginTop: normalize(16),
        opacity: 0.6,
    },
});

export default AppNavigator;
