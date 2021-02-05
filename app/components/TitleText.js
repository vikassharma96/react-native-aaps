import React from 'react';
import {Text, StyleSheet} from 'react-native';
import strings from '../constants/strings';

const TitleText = (props) => (
  <Text style={{...styles.title, ...props.style}}>{props.children}</Text>
);

const styles = StyleSheet.create({
  title: {
    fontFamily: strings.bold,
    fontSize: 20,
  },
});

export default TitleText;
