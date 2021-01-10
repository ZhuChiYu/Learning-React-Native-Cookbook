/*
 * @Author: zhu.cy@outlook.com 
 * @Date: 2021-01-04 09:34:59 
 * @Last Modified by:   frank.zhuchiyu 
 * @Last Modified time: 2021-01-04 09:34:59 
 */
 
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Navigation } from 'react-native-navigation';
import App from './passData'
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
                // navigation.push 将另一个屏面压入导航栈中，第一个参数为组件ID，第二个为
                //具体的页面，navigation会自动在TopBar上加入回退按钮
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

//Navigation.registerComponent 给每一个React组件分配唯一的组件ID，这个ID
//用来追踪压入栈内的组件
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

//监听app启动事件，最好在index文件的第一行
Navigation.events().registerAppLaunchedListener(async () => {
    //设置根组件界面，在registerAppLaunchedListener回调函数中定义
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