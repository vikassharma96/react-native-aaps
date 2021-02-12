import React, {useCallback, useEffect, useState, useLayoutEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Switch,
  Platform,
  TouchableOpacity,
} from 'react-native';
import colors from '../config/colors';
import strings from '../config/strings';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch} from 'react-redux';
import {setFilters} from '../store/actions/meals';

const FilterSwitch = (props) => {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.label}</Text>
      <Switch
        trackColor={{true: colors.primaryColor, false: colors.grey}}
        thumbColor={Platform.OS === 'android' ? colors.primaryColor : ''}
        value={props.state}
        onValueChange={props.onChange}
      />
    </View>
  );
};

const FiltersScreen = (props) => {
  const {navigation, route} = props;

  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const dispatch = useDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Filter Meals',
      headerLeft: () => (
        <TouchableOpacity
          style={{marginStart: 10}}
          onPress={() => navigation.toggleDrawer()}>
          <MaterialCommunityIcons color="white" size={24} name="menu" />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity style={{marginEnd: 10}} onPress={route.params?.save}>
          <MaterialCommunityIcons color="white" size={24} name="content-save" />
        </TouchableOpacity>
      ),
    });
  }, [navigation, route.params]);

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegetarian: isVegetarian,
    };

    dispatch(setFilters(appliedFilters));
  }, [dispatch, isGlutenFree, isLactoseFree, isVegan, isVegetarian]);

  useEffect(() => {
    navigation.setParams({save: saveFilters});
  }, [saveFilters]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <FilterSwitch
        label="Gluten-free"
        state={isGlutenFree}
        onChange={(newValue) => setIsGlutenFree(newValue)}
      />
      <FilterSwitch
        label="Lactose-free"
        state={isLactoseFree}
        onChange={(newValue) => setIsLactoseFree(newValue)}
      />
      <FilterSwitch
        label="Vegan"
        state={isVegan}
        onChange={(newValue) => setIsVegan(newValue)}
      />
      <FilterSwitch
        label="Vegetarian"
        state={isVegetarian}
        onChange={(newValue) => setIsVegetarian(newValue)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontFamily: strings.semiBold,
    fontSize: 22,
    margin: 20,
    textAlign: 'center',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginVertical: 15,
  },
});

export default FiltersScreen;
