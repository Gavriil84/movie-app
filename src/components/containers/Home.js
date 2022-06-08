import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import React from 'react'
import MoviesContainer from '../containers/MoviesContainer';
import SearchResults from '../containers/SearchResults';
import TvShows from '../containers/TvShows';

const Tab = createMaterialTopTabNavigator();

const Home = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarLabelStyle: { fontSize: 14, textTransform: 'none' },
                tabBarIndicatorStyle: { backgroundColor: "#2c3e50" },

            }}
        >
            <Tab.Screen name="Movies" component={MoviesContainer} options={{ tabBarLabel: 'Movies' }} />
            <Tab.Screen name="Search Results" component={SearchResults} options={{ tabBarLabel: 'Search Results' }} />
            <Tab.Screen name="TV Shows" component={TvShows} options={{ tabBarLabel: 'TV Shows' }} />
        </Tab.Navigator>
    )
}

export default Home