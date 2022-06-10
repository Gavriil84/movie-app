import { StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { CheckIcon, Select, VStack } from 'native-base'



const TVMenu = (props) => {
    const { apiCategory, setApiCategory } = props

    return (
        <VStack mt={10} mb={10} space={6} alignSelf='center' w='100%'>
            <Select
                selectedValue={apiCategory}
                mx={10}
                onValueChange={nextValue => setApiCategory(nextValue)}
                _selectedItem={{
                    bg: "emerald.600",
                    borderRadius: 5,
                    padding: 3,
                    _text: { color: "white" },
                    endIcon: <CheckIcon size={6} ml={-2} color="white" />
                }}>
                <Select.Item label='airing_today' value='airing_today' />
                <Select.Item label='on_the_air' value='on_the_air' />
                <Select.Item label='popular' value='popular' />
                <Select.Item label='top_rated' value='top_rated' />
            </Select>
        </VStack>
    )
}

export default TVMenu