import { Box, Center, Container, FlatList, Text } from 'native-base'
import React, { useEffect, useState } from 'react'
import MovieCard from '../listitems/MovieCard'
import Menu from '../menus/Menu'
import axios from 'axios'
import { POPULAR } from '../../config/api_config'
import { StyleSheet } from 'react-native';

const popular = axios.create({
    baseURL: POPULAR
})

const MoviesContainer = () => {
    const [popularMovie, setPopularMovie] = useState([])

    useEffect(() => {
        popular.get().then(
            res => {
                setPopularMovie(res.data.results)
            }
        )
    }, [])


    return (
        <>
            <Box width="100%" style={styles.container}>
                <Menu />
                <FlatList
                    data={popularMovie}
                    renderItem={({ item }) => (
                        <MovieCard
                            image={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                            title={item.title}
                            popularity={item.popularity}
                            release_date={item.release_date}
                        />
                    )}>
                </FlatList>
            </Box>
        </>
    )
}


export default MoviesContainer

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});