import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList
} from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';


export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { idx: Math.random(), value: goalTitle }
    ]);
  }

  const removeGoalHandler = goalIdx => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(g => g.idx !== goalIdx);
    })
  }

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList
        keyExtractor={(item, index) => item.idx}
        data={courseGoals}
        renderItem={itemData => <GoalItem idx={itemData.item.idx} onDelete={removeGoalHandler} title={itemData.item.value}/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
});
