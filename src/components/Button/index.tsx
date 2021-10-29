import React, {FC} from 'react'
import {Text, TextProps, TouchableHighlight} from 'react-native'

import styles from './styles'

//Fix Value + Validation

interface ButtonProps extends TextProps {
    title: string
}

const Button: FC<ButtonProps> = ({title, style, ...props}) => {
    return (
        <TouchableHighlight>
            <Text style={[styles.button, style]} {...props}>{title}</Text>
        </TouchableHighlight>
    )
} 

export default Button