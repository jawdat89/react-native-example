import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, Text, Button, Alert } from 'react-native';

import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (isNaN(rndNum) && rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
};

const GameScreen = props => {
    const [currentGuess, setCurrentGuess] = useState(
        generateRandomBetween(1, 100, props.userChoice)
    );

    const [rounds, setRounds] = useState(0);

    const currenLow = useRef(1);
    const currentHigh = useRef(100);

    const { userChoice, onGameOver } = props;

    useEffect(() => {
        if (currentGuess === userChoice) {
            props.onGameOver(rounds);
        }
    },[currentGuess, userChoice, onGameOver])

    const nextGuessHandler = direction => {
        if (
            (direction === 'lower' && currentGuess < userChoice) ||
            (direction === 'greater' && currentGuess > userChoice)
        ) {
            Alert.alert('Don\'t lie!', 'You know that this is wrong...', [{ text: 'Sorry!', style: 'cancel' }]);
            return;
        } 

        if (direction === 'lower') {
            currentHigh.current = currentGuess;
        } else {
            currenLow.current = currentGuess;
        }
        const nextNumber = generateRandomBetween(currenLow.current, currentHigh.current, currentGuess);
        
        setCurrentGuess(nextNumber);
        setRounds(currentRounds => currentRounds + 1);
    };

    return (
        <View style={styles.screen}>
            <Text style={styles.bodyText}>Oppenent's Guess: </Text>
            <NumberContainer style={styles.NumberContainer}>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button title="LOWER"   onPress={nextGuessHandler.bind(this, 'lower')}/>
                <Button title="GREATER" onPress={nextGuessHandler.bind(this, 'greater')}/>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        marginTop:120,
        padding: 10,
        alignItems: 'center'
    }, 
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%'
    },
    NumberContainer: {
        
    }
});

export default GameScreen;