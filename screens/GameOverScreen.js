import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <Text style={styles.bodyText}>The game is over!</Text>
            <Text style={styles.bodyText}>Number of rounds: {props.roundsNumber}</Text>
            <Text style={styles.bodyText}>Number was: {props.userNumber}</Text>
            <Button title='NEW GAME' onPress={props.onRestart} />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'
    }
});

export default GameOverScreen;