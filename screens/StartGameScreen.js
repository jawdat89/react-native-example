import React, { } from 'react';
import { View, StyleSheet, Text, TextInput, Button } from 'react-native';

const StartGameScreen = props => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}> Start a New Game </Text>
            <View style={styles.inputConatainer}>
                <Text>Select a number</Text>
                <TextInput style={styles.input} />
                <View style={styles.buttonsContainer}>
                    <Button title="Reset" onPress={() => {}} />
                    <Button title="Confirm" onPress={() => {}} />
                </View>
            </View>
        </View>
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
        alignItems: 'center',
        // works only on IOS
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        // works only on android
        elevation: 5,
        backgroundColor: 'white',
        padding: 5,
        borderRadius: 10,
    },
    buttonsContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingVertical: 5,
        paddingHorizontal: 15
    },
    input: {
        borderColor: 'black',
        borderWidth: 1,
        width: '80%',
    }
});

export default StartGameScreen;
