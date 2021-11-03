import {StyleSheet, StatusBar} from 'react-native'

const styles = StyleSheet.create({
    container: {
        paddingTop: StatusBar.currentHeight,
        backgroundColor: 'whitesmoke',
        height: '100%'
    },
    search: {
        height: 40,
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    searchInput: {
        backgroundColor: 'white',
        flexBasis: '85%',
        height: '100%',
        borderRadius: 30,
        borderWidth: 0
    },
    filters: {
        flexBasis: '15%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
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