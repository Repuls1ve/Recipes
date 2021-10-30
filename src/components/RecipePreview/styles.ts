import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
    },
    image: {
        height: 200,
        width: '100%',
        borderRadius: 20
    },
    details: {
        marginHorizontal: 6  
    },
    title: {
        fontSize: 16,
        fontFamily: 'Inter_600SemiBold'
    },
    description: {
        fontSize: 12.5,
        opacity: 0.7
    },
    helpers: {
        marginTop: 5,
        flexDirection: 'row',
    },
    likes: {
        flexDirection: 'row',
        marginRight: 10
    },
    time: {
        flexDirection: 'row',
        marginRight: 10
    },
    quantity: {
        flexDirection: 'row',
    },
    icon: {
        fontSize: 19,
        textAlignVertical: 'center',
    },
    helperValue: {
        marginLeft: 4,
        textAlignVertical: 'center',
        fontSize: 16
    }
})

export default styles