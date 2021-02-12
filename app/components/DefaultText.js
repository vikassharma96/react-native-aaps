import React from 'react';
import {Text, StyleSheet} from 'react-native';
import strings from '../config/strings';

const DefaultText = (props) => {
  return <Text style={styles.text}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: strings.regular,
  },
});

export default DefaultText;
