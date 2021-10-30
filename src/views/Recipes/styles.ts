import {StyleSheet, StatusBar} from 'react-native'

const styles = StyleSheet.create({
    container: {
        paddingTop: StatusBar.currentHeight,
        backgroundColor: 'white',
        height: '100%'
    },
    search: {
        height: 70,
        borderBottomRightRadius: 35,
        borderBottomLeftRadius: 35,
        backgroundColor: '#e8f5e9',
        alignItems: 'center',
    },
    content: {
        flex: 1,
        marginTop: 10,
        marginHorizontal: 10,
    },
    recipeWrapper: {
        marginBottom: 25
    }
})

export default styles