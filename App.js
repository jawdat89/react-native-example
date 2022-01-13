import React, { useState } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

import CustomStyles from './constants/default-styles';

import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
};

export default function App() {

  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);
  
  if (!dataLoaded) {
    return (
      <View>
        <AppLoading
          startAsync={fetchFonts}
          onFinish={() => { setDataLoaded(true) }}
          onError={(err) => console.log(err)}
        />
      </View>
    );
  }

  const startGameHandler = (number) => {
    setUserNumber(number);
  };

  const gameOverHandler = numberOfRounds => {
    setGuessRounds(numberOfRounds);
  }

  const configureNewGameHandler = () => {
    setGuessRounds(0);
    setUserNumber(null);
  }

  let content = <StartGameScreen onStartGame={startGameHandler} />

  if (userNumber && guessRounds <= 0) {
    content = (
      <GameScreen userChoice={userNumber} onGameOver={gameOverHandler}/>
    );
  } else if (guessRounds > 0) {
    content = <GameOverScreen roundsNumber={guessRounds} userNumber={userNumber} onRestart={configureNewGameHandler} />;
  } else {
    content = <StartGameScreen onStartGame={startGameHandler} />
  }

  return (
    <View style={styles.screen}>
      <Header style={CustomStyles.title} title={'Guess a number'} />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
});
