import { Ionicons } from '@expo/vector-icons';
import { Button, FlatList, FormControl, HStack, Icon, Input, Text, VStack } from 'native-base'
import React, { useState } from 'react'
import SearchType from '../menus/SearchType';
import axios from 'axios'
import { BASE_URL, API_KEY } from '../../config/api_config';
import MovieCard from '../listitems/MovieCard';

const url = axios.create({
    baseURL: BASE_URL
})

const Form = (props) => {
    const { setMovie, movie, searchType, setSearchType, setIsLoading } = props
    const [formData, setFormData] = useState('')

    const onSubmit = () => {
        if (searchType === 'multi' || searchType === 'movie' || searchType === 'tv') {
            url.get(`${BASE_URL}search/${searchType}${API_KEY}&language=en-US&page=1&query=${formData}&include_adult=false`).then(
                res => {
                    setMovie(res.data.results)
                    setIsLoading(false)
                }
            )
        }
    }

    return (
        <VStack space={2} width='100%' py={5} ml={6}>
            <FormControl isRequired justifyContent='center'>
                <FormControl.Label fontSize='sm'>Search Movie/TV Show Name</FormControl.Label>
                <VStack width='100%' space={2}>
                    <Input placeholder="i.e. James Bond, CSI"
                        variant='filled'
                        bg='gray.200'
                        px={3}
                        width='85%'
                        onChangeText={text => setFormData(text)}
                        InputLeftElement={<Icon size={5} ml={2} color='gray.400' as={<Ionicons name='ios-search' />} />} />
                </VStack>

                <VStack>
                    <FormControl.Label fontSize='sm'>Choose Search Type</FormControl.Label>
                    <HStack>
                        <SearchType searchType={searchType} setSearchType={setSearchType} />
                        <Button
                            bgColor="lightBlue.500"
                            mt={2} ml={5}
                            width="30%"
                            startIcon={<Icon as={Ionicons} name='ios-search' />}
                            onPress={onSubmit}>
                            Search</Button>
                    </HStack>
                    <Text fontSize="xs" mt={2} color="gray.600">Please select a search type</Text>
                </VStack>
            </FormControl>
        </VStack>
    )
}

export default Form;
