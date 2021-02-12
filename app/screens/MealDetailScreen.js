import React, {useCallback, useLayoutEffect} from 'react';
import {
  ScrollView,
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DefaultText from '../components/DefaultText';
import {useSelector, useDispatch} from 'react-redux';
import {toggleFavorite} from '../store/actions/meals';
import colors from '../config/colors';

const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  );
};

const MealDetailScreen = (props) => {
  const {route, navigation} = props;
  const mealId = route.params?.mealId;

  const availableMeals = useSelector((state) => state.meals.meals);

  const selectedMeal = availableMeals.find((meal) => meal.id === mealId);

  const currentMealIsFavorite = useSelector((state) =>
    state.meals.favoriteMeals.some((meal) => meal.id === mealId),
  );

  const dispatch = useDispatch();

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId));
  }, [dispatch, mealId]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: selectedMeal.title,
      headerRight: () => (
        <TouchableOpacity
          style={{marginEnd: 10}}
          onPress={toggleFavoriteHandler}>
          <MaterialCommunityIcons
            color={currentMealIsFavorite ? colors.primaryColor : colors.white}
            size={24}
            name="heart"
          />
        </TouchableOpacity>
      ),
    });
  }, [currentMealIsFavorite, navigation, selectedMeal, toggleFavoriteHandler]);

  return (
    <ScrollView>
      <Image source={{uri: selectedMeal.imageUrl}} style={styles.image} />
      <View style={styles.details}>
        <DefaultText>{selectedMeal.duration}m</DefaultText>
        <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectedMeal.ingredients.map((ingredient) => (
        <ListItem key={ingredient}>{ingredient}</ListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map((step) => (
        <ListItem key={step}>{step}</ListItem>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  details: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around',
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    textAlign: 'center',
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
  },
});

export default MealDetailScreen;
