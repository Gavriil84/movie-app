import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import IndexScreen from '../screens/IndexScreen';
import React from 'react'
import ShowScreen from '../screens/ShowScreen';

const Stack = createNativeStackNavigator();

const AppStack = () => (

    <NavigationContainer>
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
                    },
                }}
            />
            <Stack.Screen
                name='Details'
                component={ShowScreen}
                options={({ route }) => ({
                    title: route.params.title,
                    id: route.params.id,
                    release_date: route.params.release_date,
                    popularity: route.params.popularity,
                    overview: route.params.overview,
                    image: route.params.image,
                    headerBackTitle: 'Back to List'
                })}
            />
        </Stack.Navigator>
    </NavigationContainer>
)


export default AppStack
