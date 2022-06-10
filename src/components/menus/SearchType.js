import { StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { CheckIcon, Select, VStack } from 'native-base'



const SearchType = (props) => {
    const { searchType, setSearchType } = props

    return (
        <VStack mt={3} w='50%'>
            <Select
                selectedValue={searchType}
                onValueChange={nextValue => setSearchType(nextValue)}
                _selectedItem={{
                    bg: "emerald.600",
                    borderRadius: 5,
                    padding: 3,
                    _text: { color: "white" },
                    endIcon: <CheckIcon size={6} ml={-2} color="white" />
                }}>
                <Select.Item label='multi' value='multi' />
                <Select.Item label='movie' value='movie' />
                <Select.Item label='tv' value='tv' />
            </Select>
        </VStack>
    )
}

export default SearchType