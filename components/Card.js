import React, { } from 'react';
import { View, StyleSheet } from 'react-native';

const Card = props => { 
    return (
        <View style={{...styles.card, ...props.style}}>{props.children}</View>  
    );
};

const styles = StyleSheet.create({
    card: {
        // works only on IOS
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        // works only on android
        elevation: 25,

        backgroundColor: 'white',
        padding: 5,
        borderRadius: 10,
    }
});

export default Card;