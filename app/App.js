import React, {useRef, useState} from 'react';
import {StyleSheet, View, FlatList, Button} from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

const App = () => {
  const [goals, setGoals] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const ref = useRef(null);

  const addGoalHandler = (goalTitle) => {
    // setGoals([enteredGoal, ...goals]);
    if (!goalTitle) {
      return;
    }
    setGoals((currentGoals) => [
      {id: Math.random().toString(), value: goalTitle},
      ...currentGoals,
    ]);
    // setEnteredGoal('');
    ref.current.reset();
    setIsModalVisible(false);
  };

  const removeGoalHandler = (id) => {
    setGoals((currentGoals) => currentGoals.filter((item) => item.id !== id));
  };

  return (
    <View style={styles.screen}>
      <Button title="Add New GOAL" onPress={() => setIsModalVisible(true)} />
      <GoalInput
        ref={ref}
        isVisible={isModalVisible}
        onAddGoal={addGoalHandler}
        onCancel={() => setIsModalVisible(false)}
        goals={goals}
      />
      {/* <ScrollView style={styles.sectionBody}>
        {goals.map((goal, index) => {
          return (
            <View style={styles.listItem}>
              <Text key={index}>{goal}</Text>
            </View>
          );
        })}
      </ScrollView> */}
      <FlatList
        data={goals}
        style={styles.sectionBody}
        keyExtractor={(item) => item.id.toString()}
        renderItem={(itemData) => {
          return <GoalItem item={itemData.item} onDelete={removeGoalHandler} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 40,
  },
  sectionBody: {
    // width: '80%',
    marginTop: 10,
  },
});

export default App;
