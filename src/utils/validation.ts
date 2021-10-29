import * as yup from 'yup'

export const RegistrationValidationSchema = yup.object().shape({
    email: yup
        .string()
        .email('Введите правильный email')
        .required('Email - обязательное поле'),
    password: yup
        .string()
        .min(8, ({min}) => `Пароль должен содержать как минимум ${min} символов`)
        .required('Пароль - обязательное поле'),
    confirmPassword: yup
        .string()
        .when('password', {
            is: (val: string) => val ? true : false,
            then: yup
                .string()
                .oneOf([yup.ref('password')],
                'Пароли должны совпадать'
            )
        })
        .required('Подтвердите свой пароль')
})

export const LoginValidationSchema = yup.object().shape({
    email: yup
        .string()
        .email('Введите правильный email')
        .required('Email - обязательное поле'),
    password: yup
        .string()
        .min(8, ({min}) => `Пароль должен содержать как минимум ${min} символов`)
        .required('Пароль - обязательное поле')
})

export const ResetPasswordSchema = yup.object().shape({
    email: yup
        .string()
        .email('Введите правильный email')
        .required('Email - обязательное поле')
})