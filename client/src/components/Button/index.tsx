import React, {FC} from 'react'
import {StyleProp, Text, TextStyle, TouchableOpacity, TouchableOpacityProps} from 'react-native'

import styles from './styles'

//Fix Value + Validation

interface ButtonProps extends TouchableOpacityProps {
    title: string
    textStyle?: StyleProp<TextStyle>
}

const Button: FC<ButtonProps> = ({title, textStyle, style, ...props}) => {
    return (
        <TouchableOpacity style={style}>
            <Text style={[styles.text, textStyle]} {...props}>{title}</Text>
        </TouchableOpacity>
    )
} 

export default Button