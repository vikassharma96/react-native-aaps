import React, {useLayoutEffect} from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {MEALS} from '../data/dummy-data';

const MealDetailScreen = (props) => {
  const {route, navigation} = props;
  const mealId = route.params?.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: selectedMeal.title,
      headerRight: () => (
        <TouchableOpacity
          style={{marginEnd: 10}}
          onPress={() => console.log('favorite')}>
          <MaterialCommunityIcons color="white" size={24} name="heart" />
        </TouchableOpacity>
      ),
    });
  }, [navigation, selectedMeal]);

  return (
    <View style={styles.screen}>
      <Text>{selectedMeal.title}</Text>
      <Button
        title="Go Back to Categories"
        onPress={() => {
          navigation.popToTop();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MealDetailScreen;
