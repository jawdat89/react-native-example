import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Button,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native';

import Card from '../components/Card'; 
import Colors from '../constants/colors';
import Input from '../components/Input';

const StartGameScreen = props => {
    
    const [enteredValue, setEnteredValue] = useState('');

    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    };
    
    return (
        <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
            <View style={styles.screen}>
                <Text style={styles.title}> Start a New Game </Text>
                <Card style={styles.inputConatainer}>
                    <Text>Select a number</Text>
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
                            <Button title="Reset" onPress={() => { }} color={Colors.accent} />
                        </View>
                        <View style={styles.buttonContainer}>
                            <Button title="Confirm" onPress={() => { }} color={Colors.primary} />
                        </View>
                    </View>
                </Card>
            </View>
        </TouchableWithoutFeedback>
    );
 };

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
        width: 300,
        maxWidth: '80%',
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
        width: 100,
    }
});

export default StartGameScreen;
