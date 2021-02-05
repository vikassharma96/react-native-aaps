import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';
import {Button, Modal, StyleSheet, TextInput, View} from 'react-native';
import colors from '../config/colors';

const GoalInput = forwardRef((props, ref) => {
  const [enteredGoal, setEnteredGoal] = useState();

  // function goalInputHandler(enteredText) {
  //   setEnteredGoal(enteredText);
  // }

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  //   useEffect(() => {
  //     setEnteredGoal('');
  //   }, [props.goals]);

  const reset = () => {
    setEnteredGoal('');
  };

  // use of useImperativeHandle hook to allow the child to only expose specific properties
  // to the parent
  useImperativeHandle(ref, () => {
    return {
      reset: reset,
    };
  });

  const handleAddGoal = () => {
    if (!enteredGoal) {
      return;
    }
    props.onAddGoal(enteredGoal);
    setEnteredGoal('');
  };

  const handleCancel = () => {
    setEnteredGoal('');
    props.onCancel();
  };

  return (
    <Modal visible={props.isVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter your GOAL"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Add"
              // onPress={() => props.onAddGoal(enteredGoal)}
              // onPress={props.onAddGoal.bind(this, enteredGoal)}
              onPress={handleAddGoal}
            />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" color="red" onPress={handleCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
});

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    width: '80%',
    paddingStart: 10,
    marginBottom: 10,
    borderColor: colors.faded_grey,
  },
  buttonContainer: {
    width: '60%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    width: '40%',
  },
});

export default GoalInput;
