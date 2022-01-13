import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ColorPropType } from 'react-native';

import CustomStyles from '../constants/default-styles';
import Colors from '../constants/colors';

const MainButton = props => {
    return (
        <TouchableOpacity activeOpacity={0.75} onPress={props.onPress}>
            <View style={{ ...styles.button, ...props.buttonStyle }}>
                <Text style={{ ...CustomStyles.bodyText, ...styles.buttonText, ...props.textStyle }}>{props.children}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.mainButton,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25
    },
    buttonText: {
        color: 'white',
        fontSize: 18
    }
});

export default MainButton;