import React, {FC} from 'react'
import {StyleProp, TextInput, TextInputProps, TextStyle, View} from 'react-native'
import {MaterialIcons} from '@expo/vector-icons'

import styles from './styles'

interface TextFieldProps extends TextInputProps {
    icon: any
    textStyle?: StyleProp<TextStyle>
    inputState?: InputState
    onChangeText: (text: string) => void 
}

type InputState = 'Valid' | 'Invalid' | 'Pristine'

const TextField: FC<TextFieldProps> = ({icon, inputState='Pristine', style, textStyle, onChangeText, ...props}) => {
    return (
        <View
        style={[
            styles.container, 
            inputState === 'Invalid' && styles.inputInvalid, 
            inputState === 'Valid' && styles.inputValid,
            style]}
        >
            <MaterialIcons
                name={icon}
                color={inputState !== 'Invalid' ? 'black' : 'crimson'}
                style={styles.icon}
            />
            <TextInput
                style={[styles.textInput, textStyle]}
                onChangeText={handleTextChange}
                {...props}
            />
            {inputState !== 'Pristine' && 
            <MaterialIcons 
                name={handleValidationIcon()} 
                color={inputState !== 'Invalid' ? 'green' : 'crimson'} 
                style={styles.validationIcon}
            />}
        </View>
    )

    function handleTextChange(text: string): void {
        onChangeText(text)
    }

    function handleValidationIcon(): any {
        let iconName: any
        inputState === 'Valid' ? iconName = 'check' :
        inputState === 'Invalid' ? iconName = 'block' : 'error'
        return iconName
    }
}

export default TextField