import { StyleSheet, TextStyle } from 'react-native';

const ExStyles = StyleSheet.create<{ textbox: TextStyle, button: TextStyle, items: TextStyle, gridElement: TextStyle }>({
    textbox: {
        color: 'orange',
        fontSize: 25,
        backgroundColor: 'white',
        // textAlign: 'center',
        padding: 20,
        margin: 5,
        borderRadius: 12,
        borderWidth: 3,
        borderColor: 'red',
    },

    button: {
        color: 'orange',
        fontSize: 20,
        padding: 15,
        margin: 15
    },

    items: {
        color: 'orange',
        fontSize: 20,
        padding: 10,
        margin: 20,
        textAlign: 'center',
        borderColor: 'red',
        borderWidth: 1.5,
        borderRadius: 10
    },
    gridElement: {
        color: 'pink',
        backgroundColor: 'green',
        padding: 40,
        margin: 10,
        textAlign: 'left'

    }
});

export default ExStyles;
