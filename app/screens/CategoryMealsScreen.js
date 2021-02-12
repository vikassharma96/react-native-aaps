import React, {useLayoutEffect} from 'react';

import {CATEGORIES} from '../data/dummy-data';
import MealList from '../components/MealList';
import {useSelector} from 'react-redux';
import {StyleSheet, View} from 'react-native';
import DefaultText from '../components/DefaultText';

const CategoryMealScreen = (props) => {
  const {navigation, route} = props;

  const catId = route.params?.categoryId;
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: selectedCategory.title,
    });
  }, [navigation, selectedCategory.title]);

  const availableMeals = useSelector((state) => state.meals.filteredMeals);

  const displayedMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0,
  );

  if (displayedMeals.length === 0) {
    return (
      <View style={styles.content}>
        <DefaultText>No meals found, maybe check your filters?</DefaultText>
      </View>
    );
  }

  return <MealList listData={displayedMeals} navigation={navigation} />;
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategoryMealScreen;
