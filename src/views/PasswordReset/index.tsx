import React, {FC, useState} from 'react'
import {View, Text, Image} from 'react-native'
import {StackScreenProps} from '@react-navigation/stack'
import {Formik, FormikHelpers} from 'formik'

import {RootNavigatorParamsList} from '../../nav/routes'

import {ResetPasswordSchema} from '../../utils/validation'

import TextField from '../../components/TextField'
import Button from '../../components/Button'

import styles from './styles'

const backgroundImage = require('../../assets/images/background.jpg')

type NavigationProps = StackScreenProps<RootNavigatorParamsList, 'PasswordReset'>

interface PasswordResetProps extends NavigationProps {
}

interface FormValues {
    email: string
}

const PasswordReset: FC<PasswordResetProps> = () => {
    const initialValues: FormValues = {
        email: ''
    }
    
    const onSubmit = (values: FormValues, actions: FormikHelpers<FormValues>): void => {
        alert(values.email)
    }

    return (
        <View style={styles.container}>
            <Image source={backgroundImage} style={styles.topImage}/>
            <View style={styles.box}>
                <View style={styles.content}>
                    <Formik
                    validationSchema={ResetPasswordSchema}
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    >
                    {({handleChange, handleSubmit, values, errors}) => (
                        <>
                        <Text style={styles.title}>Восстановление пароля</Text>
                        <Text style={styles.description}>Введите свой email и мы отправим на него код для восстановления</Text>
                        <TextField
                            keyboardType='email-address'
                            onChangeText={handleChange('email')}
                            inputState={values.email ? errors.email ? 'Invalid' : 'Valid' : 'Pristine'}
                            value={values.email}
                            style={styles.textField}
                            placeholder='Введите email'
                            icon='mail-outline'
                        />
                        <Text style={styles.error}>{errors.email}</Text>
                        <Button
                            style={styles.button}
                            onPress={handleSubmit as () => void}
                            title='Отправить код'/>
                        </>
                    )}
                    </Formik>
                </View>
            </View>
            <Image source={backgroundImage} style={styles.bottomImage}/>
        </View>
    )
}

export default PasswordReset