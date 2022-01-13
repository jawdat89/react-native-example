import React from 'react';
import { View, StyleSheet, Text, Button, Image } from 'react-native';

import CustomStyles from '../constants/default-styles';

import MainButton from '../components/MainButton';

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <Text style={CustomStyles.title}>The game is over!</Text>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={require('../assets/images/success.jpg')}
                    // source={{uri: 'https://images.pexels.com/photos/21696/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}}
                    resizeMode='stretch'    
                    />
            </View>
            <View style={styles.resultContainer}>
                <Text style={{ ...CustomStyles.bodyText, ...styles.resultText }}>Your phone needed <Text style={{ ...CustomStyles.title, ...styles.deviceText }}>{props.roundsNumber}</Text> rounds to guess the number <Text style={styles.userText}>{props.userNumber}</Text></Text>
            </View>
            <MainButton onPress={props.onRestart} >NEW GAME</MainButton>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'
    },
    imageContainer: {
        width: '80%',
        height: 200,
        borderRadius: 50,
        borderWidth: 3,
        overflow:'hidden'
    },
    image: {
        width: '100%',
        height: '100%',
    },
    resultContainer: {
        width: '90%',
    },
    resultText: {
        textAlign: 'center'
    },
    deviceText: {
        color: 'red',
        fontSize:19
    },
    userText: {
        color: 'green',
        fontSize: 19
    }
    
});

export default GameOverScreen;