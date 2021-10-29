import React, {FC, useState} from 'react'
import {View, Image, Text} from 'react-native'
import {StackScreenProps} from '@react-navigation/stack'
import {Formik, FormikHelpers} from 'formik'

import {RootNavigatorParamsList} from '../../nav/routes'

import {RegistrationValidationSchema} from '../../utils/validation'

import TextField from '../../components/TextField'
import Button from '../../components/Button'

import styles from './styles'

const backgroundImage = require('../../assets/images/background.jpg')

type NavigationProps = StackScreenProps<RootNavigatorParamsList, 'Registration'>

interface RegistrationProps extends NavigationProps {
}

interface FormValues {
    email: string
    password: string
    confirmPassword: string
}

const Registration: FC<RegistrationProps> = ({navigation}) => {
    const initialValues: FormValues = {
        email: '',
        password: '',
        confirmPassword: ''
    }

    const onSubmit = (values: FormValues, actions: FormikHelpers<FormValues>): void => {
        alert(`${values.email}; ${values.password}`)
    }

    const toLogin = () => navigation.navigate('Login')

    return (
        <View style={styles.container}>
            <Image source={backgroundImage} style={styles.topImage}/>
            <View style={styles.box}>
                <View style={styles.content}>
                    <Text style={styles.title}>Создание аккаунта</Text>
                    <Formik
                    validationSchema={RegistrationValidationSchema}
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    >
                    {({handleChange, handleSubmit, values, errors}) => (
                        <>
                        <TextField 
                            keyboardType='email-address'
                            onChangeText={handleChange('email')} 
                            value={values.email}
                            inputState={values.email ? errors.email ? 'Invalid' : 'Valid' : 'Pristine'}
                            style={styles.textField}
                            placeholder='Введите email' 
                            icon='mail-outline' 
                        />
                        <Text style={styles.error}>{errors.email}</Text>
                        <TextField
                            secureTextEntry
                            onChangeText={handleChange('password')}
                            value={values.password}
                            inputState={values.password ? errors.password ? 'Invalid' : 'Valid' : 'Pristine'}
                            style={styles.textField}
                            placeholder='Введите пароль'
                            icon='lock-outline'
                        />
                        <Text style={styles.error}>{errors.password}</Text>
                        <TextField 
                            secureTextEntry
                            onChangeText={handleChange('confirmPassword')}
                            value={values.confirmPassword}
                            inputState={values.confirmPassword ? errors.confirmPassword ? 'Invalid' : 'Valid' : 'Pristine'}
                            style={styles.textField}
                            placeholder='Подтвердите пароль'
                            icon='lock-outline'
                        />
                        <Text style={styles.error}>{errors.confirmPassword}</Text>
                        <Button
                            title="Зарегистрироваться"
                            style={styles.button}
                            onPress={handleSubmit as () => void}/>
                        </>
                    )}
                    </Formik>
                    <View style={styles.helper}>
                        <Text>Уже зарегистрированы? </Text>
                        <Text style={styles.login} onPress={toLogin}>Войти</Text>
                    </View>
                </View>
            </View>
            <Image source={backgroundImage} style={styles.bottomImage}/>
        </View>
    )
}

export default Registration