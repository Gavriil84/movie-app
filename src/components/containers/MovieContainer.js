import { Box, Center, HStack, Image, Text } from 'native-base'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL, API_KEY } from '../../config/api_config'

const MovieContainer = ({ navigation, route }) => {
    const { id, image } = route.params
    const [movie, setMovie] = useState([])

    const url = axios.create({
        baseURL: BASE_URL
    })

    useEffect(() => {
        url.get(`${BASE_URL}${id}${API_KEY}`).then(
            res => {
                setMovie(res.data)
            }
        )
    }, [])

    return (
        <Box mt={10}>
            <Text>{console.log(movie.poster_path)}</Text>
            <Center px={10}>
                <Text bold fontSize="xl" mb={10}>{movie.title}</Text>
                <Box>
                    <Image source={{ uri: `https://image.tmdb.org/t/p/original/${image}` }} alt='movie image' size='2xl' mb={10} />
                </Box>
                <Text mb={10} color="coolGray.600">{movie.overview}</Text>

                <Box>
                    <HStack>
                        <Text color="coolGray.600">Popularity: {movie.popularity} | </Text>
                        <Text color="coolGray.600">Release Date: {movie.release_date}</Text>
                    </HStack>
                </Box>
            </Center>
        </Box>

    )
}

export default MovieContainer