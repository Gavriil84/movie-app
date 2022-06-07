import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import IndexScreen from '../screens/IndexScreen';

const Stack = createNativeStackNavigator();

const AppStack = () => (

    <Stack.Navigator>
        <Stack.Screen
            name="Movies App"
            component={IndexScreen}
            options={{
                title: 'Movies App',
                headerStyle: {
                    backgroundColor: '#2c3e50'
                },
                headerTitleStyle: {
                    color: '#fff'
                }
            }}
        />
    </Stack.Navigator>
)


export default AppStack