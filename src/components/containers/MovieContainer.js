import { Box, Center, HStack, Image, ScrollView, Text } from 'native-base'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL, API_KEY } from '../../config/api_config'
import placeholder from '../../../assets/placeholder.png'

const MovieContainer = ({ navigation, route }) => {
    const { id, image, searchType, media_type } = route.params
    const [movie, setMovie] = useState([])

    const url = axios.create({
        baseURL: BASE_URL
    })

    useEffect(() => {

        if (media_type != undefined) {
            url.get(`${BASE_URL}${media_type}/${id}${API_KEY}&language=en-US&page=1`).then(
                res => {
                    setMovie(res.data)
                }
            )
        } else {
            url.get(`${BASE_URL}${searchType}/${id}${API_KEY}&language=en-US&page=1`).then(
                res => {
                    setMovie(res.data)
                }
            )
        }


    }, [id])

    return (
        <ScrollView>
            <Box mt={10}>
                <Center px={10}>
                    <Text bold fontSize="xl" mb={10}>{movie.title || movie.name}</Text>

                    <Box>
                        {
                            image == 'https://image.tmdb.org/t/p/original/null' ?
                                (<Image source={placeholder} alt='movie image' size='2xl' mb={10} />) :

                                (<Image source={{ uri: image }} alt='movie image' size='2xl' mb={10} />)
                        }


                    </Box>
                    <Text mb={10} color="coolGray.600">{movie.overview}</Text>

                    <Box>
                        <HStack>
                            <Text color="coolGray.600">Popularity: {movie.popularity} | </Text>
                            <Text mb={10} color="coolGray.600">Release Date: {movie.release_date || movie.first_air_date}</Text>
                        </HStack>
                    </Box>
                </Center>
            </Box>
        </ScrollView>

    )
}

export default MovieContainer