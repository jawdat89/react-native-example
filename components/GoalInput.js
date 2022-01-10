import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState("");
    
    const onChangTextHandler = (changedText) => {
        setEnteredGoal(changedText);
      }

    return <View style={styles.inputContainer}>
        <TextInput
            placeholder="Course Goal"
            style={styles.input}
            onChangeText={onChangTextHandler}
            value={enteredGoal}
        />
        <Button title="Add" onPress={props.onAddGoal.bind(this, enteredGoal)} />
    </View>;
    
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    input: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10
    }
});

export default GoalInput;