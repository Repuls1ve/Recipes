import React, {FC} from 'react'
import {View, TextInput} from 'react-native'
import {MaterialIcons} from '@expo/vector-icons'

import styles from './styles'

//To do: search + filtering + props + custom styling

const SearchBar: FC = () => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <MaterialIcons name='search' style={styles.icon}/>
                <TextInput style={styles.input} placeholder='Введите что вы хотите найти...'/>
            </View>
            <View style={styles.underscore}/>
        </View>
    )
}

export default SearchBar