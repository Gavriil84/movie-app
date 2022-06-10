import { Box, Center, Container, FlatList, Text } from 'native-base'
import React, { useEffect, useState } from 'react'
import MovieCard from '../listitems/MovieCard'
import Menu from '../menus/Menu'
import axios from 'axios'
import { NOW_PLAYING, POPULAR, TOP_RATED, UPCOMING, BASE_URL, API_KEY } from '../../config/api_config'
import { StyleSheet } from 'react-native';

const url = axios.create({
    baseURL: BASE_URL
})

const MoviesContainer = () => {
    const [movie, setMovie] = useState([])
    const [apiCategory, setApiCategory] = useState('popular')

    useEffect(() => {

        url.get(`${BASE_URL}movie/${apiCategory}${API_KEY}&language=en-US&page=1`).then(
            res => {
                setMovie(res.data.results)
            }
        )


    }, [apiCategory])


    return (
        <>
            <Box width="100%" style={styles.container}>
                <Menu apiCategory={apiCategory} setApiCategory={setApiCategory} />
                <FlatList
                    data={movie}
                    renderItem={({ item }) => (
                        <MovieCard
                            image={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                            title={item.title}
                            popularity={item.popularity}
                            release_date={item.release_date}
                            id={item.id}
                            overview={item.overview}
                            media_type={item.media_type}
                            searchType='movie'
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