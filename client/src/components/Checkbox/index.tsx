import React, {FC, useState} from 'react'
import {Text, TouchableWithoutFeedback, View, ViewProps} from 'react-native'
import {MaterialIcons} from '@expo/vector-icons'

import styles from './styles'

interface CheckboxProps extends ViewProps {
    label: string
    onPress: () => void
    checked: boolean
}

const Checkbox: FC<CheckboxProps> = ({label, checked, onPress, ...props}) => {
        return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View {...props}>
                <MaterialIcons name={checked ? 'check-box' : 'check-box-outline-blank'} style={styles.icon}/>
                <Text>{label}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
} 

export default Checkbox