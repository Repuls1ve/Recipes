import React, {FC, useEffect} from 'react'
import {View, Image, Text} from 'react-native'
import {StackScreenProps} from '@react-navigation/stack'
import {Formik, FormikHelpers} from 'formik'

import {useAppDispatch, useAppSelector} from '../../hooks/redux'
import {signIn} from '../../store/slices/user-slice'

import {RootNavigatorParamsList} from '../../nav/routes'

import {LoginValidationSchema} from '../../utils/validation'

import Checkbox from '../../components/Checkbox'
import TextField from '../../components/TextField'
import Button from '../../components/Button'

import styles from './styles'

const backgroundImage = require('../../assets/images/background.jpg')

type NavigationProps = StackScreenProps<RootNavigatorParamsList, 'Login'>

interface LoginProps extends NavigationProps {
}

interface FormValues {
    email: string
    password: string
    remember: boolean
}

const Login: FC<LoginProps> = ({navigation}) => {
    const {error, isAuth, isLoading} = useAppSelector(state => state.users)
    const dispatch = useAppDispatch()

    const toPasswordReset = () => navigation.navigate('PasswordReset')
    const toRegistration = () => navigation.navigate('Registration')
    const toProfile = () => navigation.navigate('Profile')

    useEffect(() => {
        if (isAuth) {
            toProfile()
        }
    }, [isAuth])

    const initialValues: FormValues = {
        email: '',
        password: '',
        remember: false
    }

    const onSubmit = (values: FormValues, actions: FormikHelpers<FormValues>): void => {
        dispatch(signIn({email: values.email, password: values.password}))
    }

    return (
        <View style={styles.container}>
            <Image source={backgroundImage} style={styles.topImage}/>
            <View style={styles.box}>
                <View style={styles.content}>
                    <Text style={styles.title}>Авторизация</Text>
                    <Formik
                    validationSchema={LoginValidationSchema}
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    >
                    {({handleChange, handleSubmit, values, setFieldValue, errors}) => (
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
                            secureTextEntry={true}
                            onChangeText={handleChange('password')}
                            value={values.password}
                            inputState={values.password ? errors.password ? 'Invalid' : 'Valid' : 'Pristine'}
                            style={styles.textField}
                            placeholder='Введите пароль'
                            icon='lock-outline'
                        />
                        <Text style={styles.error}>{errors.password}</Text>
                        <View style={styles.helpers}>
                            <Checkbox
                                checked={values.remember}
                                onPress={() => setFieldValue('remember', !values.remember)}
                                style={styles.remember}
                                label='Запомнить меня'
                            />
                            <Text style={styles.forgetPassword} onPress={toPasswordReset}>Забыли пароль?</Text>
                        </View>
                        <Button
                            style={styles.button}
                            onPress={handleSubmit as () => null}
                            title={isLoading ? "Загрузка..." : "Войти"}
                        />
                        </>
                    )}
                    </Formik>
                    {Boolean(error) && <Text style={styles.serverError}>{error}</Text>}
                    <View style={styles.registerHelper}>
                        <Text>Ещё не зарегистрированы? </Text>
                        <Text style={styles.register} onPress={toRegistration}>Регистрация</Text>
                    </View>
                </View>
            </View>
            <Image source={backgroundImage} style={styles.bottomImage}/>
        </View>
    )
}

export default Login