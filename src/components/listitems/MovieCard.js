import React from 'react'
import { Box, Button, HStack, Image, VStack, Text } from 'native-base'

const MovieCard = (props) => {
    const { image, title, popularity, release_date } = props

    return (
        <Box mb={4} borderBottomWidth="1" borderColor="coolGray.300">
            <HStack>
                <Box>
                    <Image source={{ uri: image }} alt='placeholder' size='lg' ml={5} mr={3} />
                </Box>
                <Box width='60%'>
                    <VStack>
                        <Text bold fontSize="sm">{title}</Text>
                        <Text color="coolGray.600" fontSize="xs">Popularity: {popularity}</Text>
                        <Text color="coolGray.600" fontSize="xs">Release Date: {release_date}</Text>
                        <Button bgColor="lightBlue.500" mb={3} >More Details</Button>
                    </VStack>
                </Box>
            </HStack>
        </Box>
    )
}

export default MovieCard