import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import React from 'react'
import MoviesContainer from '../containers/MoviesContainer';
import SearchResults from '../containers/SearchResults';
import TvShows from '../containers/TvShows';

const Tab = createMaterialTopTabNavigator();

const IndexScreen = () => {
    return (

        <Tab.Navigator
            screenOptions={{
                tabBarLabelStyle: { fontSize: 14, textTransform: 'none' },
                tabBarIndicatorStyle: { backgroundColor: "#2c3e50" },
            }}
        >
            <Tab.Screen name="Movies" component={MoviesContainer} />
            <Tab.Screen name="Search Results" component={SearchResults} />
            <Tab.Screen name="TV Shows" component={TvShows} />
        </Tab.Navigator>

    )
}

export default IndexScreen