import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Button,
  FlatList
} from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';


export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { idx: Math.random(), value: goalTitle }
    ]);
    setIsAddMode(false);
  }

  const removeGoalHandler = goalIdx => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(g => g.idx !== goalIdx);
    })
  }

  const cancelGoalHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancel={cancelGoalHandler} />
      <FlatList
        keyExtractor={(item, index) => item.idx}
        data={courseGoals}
        renderItem={itemData => <GoalItem idx={itemData.item.idx} onDelete={removeGoalHandler} title={itemData.item.value} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
});
