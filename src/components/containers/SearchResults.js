import { Text, Box, FlatList } from 'native-base'
import React, { useState } from 'react'
import Form from '../forms/Form'
import { StyleSheet } from 'react-native';
import MovieCard from '../listitems/MovieCard';

const SearchResults = () => {
    const [movie, setMovie] = useState([])
    const [searchType, setSearchType] = useState('multi')
    const [isLoading, setIsLoading] = useState(true)

    return (
        <>
            <Form setIsLoading={setIsLoading} movie={movie} setMovie={setMovie} searchType={searchType} setSearchType={setSearchType} />

            <Box width="100%" style={styles.container}>


                {isLoading ? (
                    <Box width="100%" style={styles.loading}>
                        <Text bold fontSize="xl">Please initiate a search</Text>
                    </Box>
                ) : (
                    <FlatList
                        data={movie}
                        renderItem={({ item }) => (
                            <MovieCard
                                image={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                                title={item.title || item.name}
                                popularity={item.popularity}
                                release_date={item.release_date || item.first_air_date}
                                id={item.id}
                                overview={item.overview}
                                searchType={searchType}
                                media_type={item.media_type}
                            />
                        )}>
                    </FlatList>
                )}

            </Box>
        </>
    )
}

export default SearchResults

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    loading: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 300,
    }
});