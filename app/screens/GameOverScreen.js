import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';

import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import MainButton from '../components/MainButton';
import Colors from '../constants/colors';

const GameOverScreen = (props) => {
  return (
    <ScrollView>
      <View style={styles.screen}>
        <TitleText>The Game is Over!</TitleText>
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/images/success.png')}
            // source={{
            //   uri:
            //     'https://cdn.pixabay.com/photo/2016/05/05/23/52/mountain-summit-1375015_960_720.jpg'
            // }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <View style={styles.resultContainer}>
          <BodyText style={styles.resultText}>
            Your phone needed{' '}
            <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to
            guess the number{' '}
            <Text style={styles.highlight}>{props.userNumber}</Text>.
          </BodyText>
        </View>

        <MainButton onPress={props.onRestart}>New Game</MainButton>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  imageContainer: {
    width: Dimensions.get('screen').width * 0.7,
    height: Dimensions.get('screen').width * 0.7,
    // borderRadius: 150,
    borderRadius: (Dimensions.get('screen').width * 0.7) / 2,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    // marginVertical: 30,
    marginVertical: Dimensions.get('screen').height / 40,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: 15,
  },
  resultText: {
    textAlign: 'center',
    fontSize: 20,
  },
  highlight: {
    color: Colors.primary,
    fontFamily: 'open-sans-bold',
  },
});

export default GameOverScreen;
