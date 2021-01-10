import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Navigation } from 'react-native-navigation';
import App from './App'
import {name as appName} from './app.json';
import passData from './ch1/passData';
import listItem from './ch1/list_items'

const HomeScreen = (props) => {
    return (
      <View style={styles.root}>
        <Text>Hello React Native Navigation 👋</Text>
        <Button
        title='Push Settings Screen'
        color='#710ce3'
        onPress={() => Navigation.push(props.componentId, {
          component: {
            name: 'passData',
            passProps: {
                name: Frank,
                status: 'online',
            }
          }
        })}/>
      </View>
    );
};
HomeScreen.options = {
    topBar: {
        title: {
        text: 'Home',
        }
    },
    bottomTab: {
        text: 'Home'
    }
};

const styles = StyleSheet.create({
    root: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'whitesmoke'
    }
  });