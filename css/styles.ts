import { StyleSheet, TextStyle } from 'react-native';

const ExStyles = StyleSheet.create<{ textbox: TextStyle }>({
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
    }
});

export default ExStyles;
