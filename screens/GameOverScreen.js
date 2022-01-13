import React from 'react';
import { View, StyleSheet, Text, Button, Image } from 'react-native';

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>The game is over!</Text>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={require('../assets/images/success.jpg')}
                    // source={{uri: 'https://images.pexels.com/photos/21696/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}}
                    resizeMode='stretch'    
                    />
            </View>
            <Text style={styles.bodyText}>Number of rounds: {props.roundsNumber}</Text>
            <Text style={styles.bodyText}>Number was: {props.userNumber}</Text>
            <Button title='NEW GAME' onPress={props.onRestart} />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'
    },
    imageContainer: {
        width: '80%',
        height: 200,
        borderRadius: 50,
        borderWidth: 3,
        overflow:'hidden'
    },
    image: {
        width: '100%',
        height: '100%',
    },
    
});

export default GameOverScreen;