import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
    },
    image: {
        width: '100%',
        height: 350
    },
    contentWrapper: {
        marginTop: -30,
        flex: 1,
        backgroundColor: 'white',
        borderTopRightRadius: 35,
        borderTopLeftRadius: 35
    },
    content: {
        marginHorizontal: 25,
        marginVertical: 15
    },
    title: {
        textAlign: 'left',
        fontFamily: 'Inter_500Medium',
        fontSize: 20,
    },
    description: {
        opacity: 0.5,
        fontSize: 15
    },
    time: {
        marginTop: 5,
        flexDirection: 'row',
    },
    servings: {
        flexBasis: '50%',
    },
    cookingTime: {
        flexBasis: '50%',
    },
    servingsText: {
        fontSize: 16,
        fontFamily: 'Inter_500Medium',
    },
    cookingTimeText: {
        fontSize: 16,
        fontFamily: 'Inter_500Medium',
        textAlign: 'center'
    },
    cookingTimeCount: {
        flex: 1,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 17
    },
    servingsSelect: {
        flexDirection: 'row'
    },
    servingsButton: {
        backgroundColor: 'silver',
        width: 35,
        height: 35,
        borderRadius: 10,
        justifyContent: 'center'
    },
    servingsCount: {
        flex: 1,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 17
    },
    servingsIcon: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white'
    },
    branches: {
        marginTop: 10,
        flexDirection: 'row',
        width: '100%',
        height: 35
    },
    branchWrapper: {
        flexBasis: '50%',
    },
    branchContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    branchTitle: {
        textAlign: 'center',
        fontFamily: 'Inter_500Medium',
    },
    branchSelected: {
        borderWidth: 1,
        width: '10%',
        alignSelf: 'center',
    },
    branchDetailed: {
        marginTop: 5
    },
    dot: {
        borderRadius: 10,
        height: 7,
        width: 7,
        backgroundColor: 'gray',
        alignSelf: 'center',
        marginRight: 10
    },
    ingredients: {
        marginBottom: 10,
        flexDirection: 'row'
    },
    preparations: {
        marginBottom: 10,
        flexDirection: 'row'
    }
})

export default styles