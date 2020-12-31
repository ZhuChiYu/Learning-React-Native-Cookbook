// /**
//  * @format
//  */

//  import { Navigation } from 'react-native-navigation'
// // import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// // AppRegistry.registerComponent(appName, () => App);
// Navigation.registerComponent(appName,()=>App)
// Navigation.events().registerAppLaunchedListener(() => {
//     Navigation.setRoot({
//         root: {
//             stack: {
//                 children: [
//                     {
//                         component: {
//                             name: appName
//                         }
//                     }
//                 ]
//             }
//         }
//     })
// })

// In index.js of a new project
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Navigation } from 'react-native-navigation';
import App from './App'
import {name as appName} from './app.json';

const HomeScreen = (props) => {
    return (
      <View style={styles.root}>
        <Text>Hello React Native Navigation 👋</Text>
        <Button
        title='Push Settings Screen'
        color='#710ce3'
        onPress={() => Navigation.push(props.componentId, {
          component: {
            name: 'Settings',
            options: {
              topBar: {
                title: {
                  text: 'Settings'
                }
              }
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
    }
};

const SettingsScreen = (props) => {
    return (
        <View style={styles.root}>
            <Text>Settings Screen</Text>
            <Button
                title='Push App Screen'
                color='#710ce3'
                onPress={() => Navigation.push(props.componentId, {
                component: {
                    name: appName,
                    options: {
                    topBar: {
                        title: {
                        text: 'Settings'
                        }
                    }
                    }
                }
                })}/>
        </View>
    )
}

Navigation.registerComponent('Home', () => HomeScreen);
Navigation.registerComponent('Settings',() => SettingsScreen)
Navigation.registerComponent(appName,() => App)
//统一导航栏的样式
Navigation.setDefaultOptions({
    statusBar: {
        backgroundColor: '#4d089a'
      },
      topBar: {
        title: {
          color: 'white'
        },
        backButton: {
          color: 'white'
        },
        background: {
          color: '#4d089a'
        }
      }
})
Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'Home'
            }
          }
        ]
      }
    }
  });
});

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke'
  }
});