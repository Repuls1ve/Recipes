import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    },
    topImage: {
        height: '25%',
        width: '100%',
        borderBottomRightRadius: 70
    },
    bottomImage: {
        height: '25%',
        width: '100%',
        borderTopLeftRadius: 70
    },
    box: {
        height: '50%',
        backgroundColor: 'white',
        paddingHorizontal: 40,
        paddingVertical: 25
    },
    button: {
        marginTop: 2,
        height: 50
    },
    content: {
        width: '100%',
        marginTop: 'auto',
        marginBottom: 'auto'
    },
    title: {
        fontSize: 22,
        textAlign: 'center',
        fontFamily: 'Inter_500Medium',
    },
    description: {
        fontSize: 14,
        textAlign: 'center',
        color: 'gray',
        marginBottom: 10
    },
    error: {
        color: 'crimson',
    },
    textField: {
        marginTop: 0,
        marginBottom: 2
    }
})

export default styles