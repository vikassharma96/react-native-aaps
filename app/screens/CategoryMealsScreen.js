import React, {useLayoutEffect} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

import {CATEGORIES, MEALS} from '../data/dummy-data';
import MealItem from '../components/MealItem';
import routes from '../navigation/routes';

const CategoryMealScreen = (props) => {
  const {navigation, route} = props;

  const catId = route.params?.categoryId;
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: selectedCategory.title,
    });
  }, [navigation, selectedCategory.title]);

  const renderMealItem = (itemData) => {
    return (
      <MealItem
        title={itemData.item.title}
        image={itemData.item.imageUrl}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        onSelectMeal={() => {
          navigation.navigate(routes.MealDetail, {
            mealId: itemData.item.id,
          });
        }}
      />
    );
  };

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0,
  );

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
        style={{width: '100%'}}
      />
    </View>
  );
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
