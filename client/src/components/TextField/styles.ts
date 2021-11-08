import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        borderWidth: 1,
        borderRadius: 4,
        height: 40,
    },
    inputInvalid: {
        borderColor: 'crimson'
    },
    inputValid: {
        borderColor: '#75a478'
    },
    textInput: {
        flexBasis: '80%'
    },
    icon: {
        flexBasis: '10%',
        fontSize: 17,
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    iconInvalid: {
        color: 'crimson'
    },
    validationIcon: {
        flexBasis: '10%',
        fontSize: 17,
        textAlign: 'center',
        textAlignVertical: 'center'
    }
})

export default styles