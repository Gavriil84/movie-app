import React from 'react'
import { Box, Button, HStack, Image, VStack, Text } from 'native-base'
import { useNavigation } from '@react-navigation/native'
import placeholder from '../../../assets/placeholder.png'

const MovieCard = (props) => {
    const { image, title, popularity, release_date, id, searchType, media_type } = props
    const navigation = useNavigation();

    return (
        <Box mb={4} borderBottomWidth="1" borderColor="coolGray.300">
            <HStack>
                <Box>
                    {
                        image == 'https://image.tmdb.org/t/p/original/null' || undefined ?
                            (<Image source={placeholder} alt='movie image' size='lg' ml={5} mr={3} />) :

                            (<Image source={{ uri: image }} alt='movie image' size='lg' ml={5} mr={3} />)
                    }
                </Box>
                <Box width='60%'>
                    <VStack>
                        <Text bold fontSize="sm">{title}</Text>
                        <Text color="coolGray.600" fontSize="xs">Popularity: {popularity}</Text>
                        <Text color="coolGray.600" fontSize="xs">Release Date: {release_date}</Text>
                        <Button
                            bgColor="lightBlue.500"
                            mb={3}
                            onPress={() => navigation.navigate('Details', { title: title, id: id, image: image, searchType: searchType, media_type: media_type })}>More Details</Button>
                    </VStack>
                </Box>
            </HStack>
        </Box>
    )
}

export default MovieCard