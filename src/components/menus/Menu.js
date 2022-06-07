import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { CheckIcon, Icon, Select, VStack } from 'native-base'
import { Ionicons } from '@expo/vector-icons'



const Menu = () => {
    const [category, setCategory] = useState("popular")


    return (
        <VStack mt={10} mb={10} space={6} alignSelf='center' w='100%'>
            <Select
                selectedValue={category}
                mx={10}
                onValueChange={nextValue => setCategory(nextValue)}
                _selectedItem={{
                    bg: "emerald.600",
                    borderRadius: 5,
                    padding: 3,
                    _text: { color: "white" },
                    endIcon: <CheckIcon size={6} ml={-2} color="white" />
                }}>
                <Select.Item label='now_playing' value='now_playing' />
                <Select.Item label='popular' value='popular' />
                <Select.Item label='top_rated' value='top_rated' />
                <Select.Item label='upcoming' value='upcoming' />
            </Select>
        </VStack>
    )
}

export default Menu

const styles = StyleSheet.create({})