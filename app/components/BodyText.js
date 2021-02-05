import React from 'react';
import {Text, StyleSheet} from 'react-native';
import strings from '../constants/strings';

const BodyText = (props) => (
  <Text style={{...styles.body, ...props.style}}>{props.children}</Text>
);

const styles = StyleSheet.create({
  body: {
    fontFamily: strings.medium,
  },
});

export default BodyText;
