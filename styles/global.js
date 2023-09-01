import { StyleSheet} from 'react-native'

export const globalStyles = StyleSheet.create({
    container : {
        flex : 1,
        padding: 20
    }, titleText : {
        fontFamily : 'nunito-bold',
        fontSize : 18,
        color : '#333'
    }, paragraph : {
        paddingVertical : 8,
        lineHeight : 20,
        paddingTop: 5,
        fontFamily : 'nunito-regular',
    }, input : {
        borderRadius : 5,
        borderColor : '#333',
        padding : 10,
        fontSize : 16,
        borderWidth : 1,
        textAlignVertical : 'top'
    }, errors : {
        color : 'red',
        fontSize : 12,
        marginBottom : 10,
        marginLeft : 5
    }
})