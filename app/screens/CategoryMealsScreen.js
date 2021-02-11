import React, {useLayoutEffect} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

import {CATEGORIES, MEALS} from '../data/dummy-data';
import MealItem from '../components/MealItem';
import routes from '../navigation/routes';
import MealList from '../components/MealList';

const CategoryMealScreen = (props) => {
  const {navigation, route} = props;

  const catId = route.params?.categoryId;
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: selectedCategory.title,
    });
  }, [navigation, selectedCategory.title]);

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0,
  );

  return <MealList listData={displayedMeals} navigation={navigation} />;
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
});

export default CategoryMealScreen;
