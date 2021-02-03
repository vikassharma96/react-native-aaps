import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import colors from '../config/colors';

const GoalItem = ({item, onDelete}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => onDelete(item.id)}
      style={styles.containter}>
      <Text>{item.value}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containter: {
    padding: 10,
    margin: 10,
    backgroundColor: colors.badge,
    borderWidth: 1,
    borderColor: colors.faded_grey,
    borderRadius: 4,
  },
});

export default GoalItem;

// import React from 'react';
// import { View, StyleSheet} from 'react-native';

// function GoalItem(props) {
//    return (
//       <View style={styles.containter}></View>
//    );
// };

// const styles = StyleSheet.create({
//     containter: {}
// });

// export default GoalItem;
