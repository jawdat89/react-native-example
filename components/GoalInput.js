import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState("");
    
    const onChangTextHandler = (changedText) => {
        setEnteredGoal(changedText);
    };

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    };

    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Course Goal"
                    style={styles.input}
                    onChangeText={onChangTextHandler}
                    value={enteredGoal}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Cancel" color="red" onPress={props.onCancel} />
                    </View>
                    <View style={styles.button}>
                        <Button title="Add" onPress={addGoalHandler} />
                    </View>
                </View>
            </View>
        </Modal>
    );
    
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'column', // default
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    input: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '60%'
    },
    button: {
        width: '40%'
    }
});

export default GoalInput;