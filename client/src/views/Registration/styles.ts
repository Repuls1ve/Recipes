import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    },
    topImage: {
        height: '20%',
        width: '100%',
        borderBottomLeftRadius: 70
    },
    bottomImage: {
        height: '20%',
        width: '100%',
        borderTopRightRadius: 70
    },
    textField: {
        marginTop: 0,
        marginBottom: 0
    },
    box: {
        height: '60%',
        backgroundColor: 'white',
        paddingHorizontal: 40,
        paddingVertical: 25
    },
    button: {
        marginTop: 5,
        marginBottom: 10,
        height: 50
    },
    content: {
        width: '100%',
        marginTop: 'auto',
        marginBottom: 'auto'
    },
    title: {
        fontSize: 22,
        fontFamily: 'Inter_500Medium',
        marginBottom: 10
    },
    helper: {
        flexDirection: 'row',
        alignSelf: 'center'
    },
    login: {
        color: '#75a478'
    },
    error: {
        color: 'crimson',
    }
})

export default styles