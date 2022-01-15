import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, Text, FlatList, Alert, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

import CustomStyles from '../constants/default-styles';

import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import MainButton from '../components/MainButton';

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

const renderListItem = (listLenght, itemData) => (
    <View style={styles.listItem}>
        <Text style={CustomStyles.bodyText}>#{listLenght - itemData.index}</Text>
        <Text style={CustomStyles.bodyText}>{itemData.item}</Text>
    </View>
);

const GameScreen = props => {

    const initialGuess = generateRandomBetween(1, 100, props.userChoice);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [pastGuesses, setPastGuesses] = useState([initialGuess.toString()]);

    const currenLow = useRef(1);
    const currentHigh = useRef(100);

    const { userChoice, onGameOver } = props;

    useEffect(() => {
        if (currentGuess === userChoice) {
            props.onGameOver(pastGuesses.length);
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
            currenLow.current = currentGuess + 1;
        }
        const nextNumber = generateRandomBetween(currenLow.current, currentHigh.current, currentGuess);
        
        setCurrentGuess(nextNumber);
        // setRounds(currentRounds => currentRounds + 1);
        setPastGuesses(curPastGuesses => [nextNumber, ...curPastGuesses]);

        // let listContainerStyle = styles.listContainer;

        // if (Dimensions.get('window').width < 500) {

        // }
    };

    return (
        <View style={styles.screen}>
            <Text style={CustomStyles.bodyText}>Oppenent's Guess: </Text>
            <NumberContainer style={styles.NumberContainer}>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <MainButton onPress={nextGuessHandler.bind(this, 'lower')}>
                    <Ionicons name="md-remove" size={24} color={"white"} />
                </MainButton>
                <MainButton onPress={nextGuessHandler.bind(this, 'greater')}>
                    <Ionicons name="md-add" size={24} color={"white"} />
                </MainButton>
            </Card>
            <View style={styles.listContainer}>
                {/* <ScrollView contentContainerStyle={styles.list}>
                    {pastGuesses.map((guess, index) => renderListItem(guess, pastGuesses.length - index))}
                </ScrollView> */}
                <FlatList
                    contentContainerStyle={styles.list}
                    keyExtractor={(item) => item.toString()}
                    data={pastGuesses}
                    renderItem={ renderListItem.bind(this, pastGuesses.length) } />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    }, 
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: Dimensions.get('window').height > 900 ? 20 : 10,
        width: 400,
        maxWidth: '90%'
    },
    listContainer: {
        flex: 1,
        width: Dimensions.get('window').height > 500 ? '60%' : '80%'
    },
    list: {
        flexGrow: 1,
        justifyContent: 'flex-end',
    },
    listItem: {
        flexDirection: 'row',
        borderColor: '#ccc',
        borderWidth:1,
        padding: 15,
        marginVertical: 10,
        backgroundColor: 'white',
        justifyContent: 'space-between',
        width: '100%',
    }
});

export default GameScreen;