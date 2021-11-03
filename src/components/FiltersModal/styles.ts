import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        marginTop: 'auto',
        flexBasis: '70%',
    },
    header: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        height: '10%',
        backgroundColor: '#ededed',
    },
    headerContent: {
        flexDirection: 'row',
        height: '100%',
        width: '100%',
    },
    headerTitle: {
        flexBasis: '45%',
        fontFamily: 'Inter_600SemiBold',
        textAlign: 'left',
        fontSize: 22,
        textAlignVertical: 'center'
    },
    clear: {
        flexBasis: '30%',
        fontFamily: 'Inter_500Medium',
        fontSize: 16,
        textAlignVertical: 'center',
        textAlign: 'center'
    },
    save: {
        flexBasis: '25%',
        fontFamily: 'Inter_500Medium',
        fontSize: 16,
        textAlignVertical: 'center',
        textAlign: 'right'
    },
    content: {
        flex: 1,
        backgroundColor: 'whitesmoke',
        paddingHorizontal: 20,
        paddingTop: 30,
        paddingBottom: 20,
    },
    time: {
        flexBasis: '15%',
    },
    timeText: {
        fontSize: 18,
        fontFamily: 'Inter_500Medium',
        marginBottom: 5
    },
    timeSelectContainer: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
    },
    button: {
        flexBasis: '23%',
        height: '100%',
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
    selected: {
        backgroundColor: '#76d275',
        color: 'white'
    },
    buttonText: {
        borderRadius: 20,
        backgroundColor: 'white',
        color: 'black',
    },
    regimen: {
        marginTop: 40,
        flexBasis: '15%'
    },
    regimenText: {
        fontSize: 18,
        fontFamily: 'Inter_500Medium',
        marginBottom: 5
    },
    regimenSelectContainer: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between'
    },
    calorific: {
        marginTop: 40,
        flexBasis: '18%',
    },
    calorificHeader: {
        flexDirection: 'row',
        flexBasis: '40%',
        marginBottom: 10
    },
    calorificText: {
        fontSize: 18,
        fontFamily: 'Inter_500Medium',
        marginBottom: 5,
        flexBasis: '50%'
    },
    calorificValuesContainer: {
        flexDirection: 'row',
        flexBasis: '50%',
    },
    calorificValue: {
        flex: 1,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 20,
        fontFamily: 'Inter_500Medium',
        color: '#76d275'
    },
    calorificDivider: {
        flexBasis: '10%',
        alignSelf: 'center',
    },
    sliderContainer: {
        marginVertical: -15
    },
    slider: {
        backgroundColor: '#76d275'
    },
    sliderMarker: {
        height: 22,
        width: 22,
        borderRadius: 100,
        backgroundColor: 'white',
        borderColor: '#76d275',
        borderWidth: 2,
    },
    sliderLabels: {
        flexDirection: 'row'
    },
    sliderLabel: {
        flexBasis: '50%',
        textAlignVertical: 'center',
        color: 'gray'
    },
    sliderLabelRight: {
        textAlign: 'right',
    },
    sliderLabelLeft: {
        textAlign: 'left',
    },
    cuisine: {
        marginTop: 40,
        flexBasis: '18%',
    },
    cuisineText: {
        fontSize: 18,
        fontFamily: 'Inter_500Medium',
        marginBottom: 5,
        flexBasis: '50%'
    },
    cuisineCarousel: {
        height: 45,
    },
    cuisineButton: {
        height: '100%',
        width: 88,
        borderRadius: 20,
    }
})

export default styles