import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Button,
    TouchableWithoutFeedback,
    Keyboard,
    Alert,
    Dimensions,
    ScrollView, 
    KeyboardAvoidingView
} from 'react-native';

import Colors from '../constants/colors';
import CustomStyles from '../constants/default-styles';

import Card from '../components/Card'; 
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';
import MainButton from '../components/MainButton';

const StartGameScreen = props => {
    
    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState(undefined);
    
    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    };

    const resetInputHandler = () => {
        setEnteredValue('');
        setSelectedNumber(undefined);
        setConfirmed(false);
    };

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue, 10);
        if (isNaN(chosenNumber) || chosenNumber < 1 || chosenNumber > 99) {
            Alert.alert(
                'Invalid number!', 'Number has to be a number between 1 and 99.',
                [{ text: 'OK', style: 'destructive', onPress: resetInputHandler }]
            );
            return;
        }
        setConfirmed(true);
        setSelectedNumber(chosenNumber);
        setEnteredValue('');
        Keyboard.dismiss();
    };

    let confirmedOutput;
    if (confirmed) {
        confirmedOutput = (
            <Card style={styles.summaryContainer}>
                <Text style={CustomStyles.bodyText}>You selected</Text>
                <NumberContainer>{selectedNumber}</NumberContainer>
                <MainButton title='START GAME' onPress={() => props.onStartGame(selectedNumber)}>START GAME</MainButton>
            </Card>
        );
    } else {
        confirmedOutput = <View></View>;
    }
    
    return (
        <ScrollView>
            <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={30}>
                <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
                    <View style={styles.screen}>
                        <Text style={CustomStyles.title}> Start a New Game </Text>
                        <Card style={styles.inputConatainer}>
                            <Text style={CustomStyles.bodyText}>Select a number</Text>
                            <Input
                                style={styles.input}
                                blurOnSubmit
                                autoCapitilize='none'
                                autoCorrect={false}
                                keyboardType="number-pad"
                                maxLength={2}
                                onChangeText={numberInputHandler}
                                value={enteredValue}

                            />
                            <View style={styles.buttonsContainer}>
                                <View style={styles.buttonContainer}>
                                    <Button title="Reset" onPress={resetInputHandler} color={Colors.accent} />
                                </View>
                                <View style={styles.buttonContainer}>
                                    <Button title="Confirm" onPress={confirmInputHandler} color={Colors.primary} />
                                </View>
                            </View>
                        </Card>
                        {confirmedOutput}
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </ScrollView>
    );
 }

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'flex-start', // deafult
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
    },
    inputConatainer: {
        width: '80%',
        maxWidth: '95%',
        minWidth: 300,
        alignItems:'center'
    },
    buttonsContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingVertical: 5,
        paddingHorizontal: 15
    },
    input: { 
        minWidth: 50,
        textAlign: 'center'
    },
    buttonContainer: {
        width: Dimensions.get('window').width / 4,
    },
    summaryContainer: {
        marginTop: 20,
        alignItems: 'center'
    }
});

export default StartGameScreen;
