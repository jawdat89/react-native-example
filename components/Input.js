import React, { } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

import CustomStyles from '../constants/default-styles';

const Input = props => { 
    return (
        <View>
            <TextInput {...props} style={{ ...CustomStyles.bodyText, ...styles.input, ...props.style }} />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 30,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        marginVertical: 10
    }
});

export default Input;