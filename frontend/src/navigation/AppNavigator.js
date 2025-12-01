import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/colors';

import EmotionScreen from '../screens/EmotionScreen';
import VerseScreen from '../screens/VerseScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import AboutScreen from '../screens/AboutScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function EmotionStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: { backgroundColor: colors.deepNavy },
            }}
        >
            <Stack.Screen name="EmotionHome" component={EmotionScreen} />
            <Stack.Screen
                name="Verse"
                component={VerseScreen}
                options={{
                    presentation: 'modal',
                }}
            />
        </Stack.Navigator>
    );
}

function MainTabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Emotions') {
                        iconName = focused ? 'heart' : 'heart-outline';
                    } else if (route.name === 'Favorites') {
                        iconName = focused ? 'bookmark' : 'bookmark-outline';
                    } else if (route.name === 'About') {
                        iconName = focused ? 'information-circle' : 'information-circle-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: colors.emeraldGreen,
                tabBarInactiveTintColor: colors.softGray,
                tabBarStyle: {
                    backgroundColor: colors.charcoalBlack,
                    borderTopColor: `${colors.emeraldGreen}20`,
                    borderTopWidth: 1,
                    height: 70,
                    paddingBottom: 10,
                    paddingTop: 10,
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: '600',
                },
            })}
        >
            <Tab.Screen name="Emotions" component={EmotionStack} />
            <Tab.Screen name="Favorites" component={FavoritesScreen} />
            <Tab.Screen name="About" component={AboutScreen} />
        </Tab.Navigator>
    );
}

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <MainTabNavigator />
        </NavigationContainer>
    );
}
