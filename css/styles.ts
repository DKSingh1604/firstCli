import { StyleSheet, TextStyle } from 'react-native';

const ExStyles = StyleSheet.create<{ textbox: TextStyle, button: TextStyle, items: TextStyle, gridElement: TextStyle }>({
    textbox: {
        color: 'orange',
        fontSize: 25,
        backgroundColor: 'white',
        // textAlign: 'center',
        padding: 20,
        margin: 10,
        borderRadius: 12,
        borderWidth: 3,
        borderColor: 'red',
        flex: 2,
        flexDirection: 'row',
        // flexWrap: 'wrap'
    },

    button: {
        color: 'orange',
        fontSize: 23,
        padding: 15,
        margin: 15,
        borderColor: 'red',
        borderWidth: 2,
        borderRadius: 10,
        textAlign: 'center'
    },

    items: {
        color: 'orange',
        fontSize: 20,
        padding: 10,
        margin: 10,
        marginHorizontal: 40,
        textAlign: 'center',
        borderColor: 'red',
        borderWidth: 1.5,
        borderRadius: 10
    },
    gridElement: {
        padding: 10,
        margin: 10,
        fontSize: 15,
        textAlign: 'left',
        borderRadius: 10,
        borderColor: 'green',
        borderWidth: 2,
        backgroundColor: 'orange'
    },

});

export default ExStyles;
