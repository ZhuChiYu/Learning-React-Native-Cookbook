/*
 * @Author: zhu.cy@outlook.com 
 * @Date: 2021-01-04 09:34:59 
 * @Last Modified by: frank.zhuchiyu
 * @Last Modified time: 2021-01-04 14:33:46
 * 增加Tab导航栏，和修改启动app的根节点
 */
 
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Navigation } from 'react-native-navigation';
import App from './passData'
import {name as appName} from './app.json';
const LoginScreen = () => {
    return (
        <View style={styles.root}>
            <Button
                title='Login'
                color='#710ce3'
                onPress={()=>Navigation.setRoot(mainRoot)}
            >
            </Button>
        </View>
    )
}

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

const SettingsScreen = () => {
    return (
        <View style={styles.root}>
            <Text>Settings Screen</Text>
        </View>
    )
}
SettingsScreen.options = {
    topBar: {
        title: {
        text: 'Settings',
        }
    },
    bottomTab: {
        text: 'Settings'
    }
};

App.options = {
    topBar: {
        title: {
        text: 'app',
        }
    },
    bottomTab: {
        text: 'app'
    }
}

//Navigation.registerComponent 给每一个React组件分配唯一的组件ID，这个ID
//用来追踪压入栈内的组件
Navigation.registerComponent('Home', () => HomeScreen);
Navigation.registerComponent('Settings',() => SettingsScreen)
Navigation.registerComponent('LoginScreen',() => LoginScreen)
Navigation.registerComponent(appName,() => App)

const mainRoot = {
    root: {
        bottomTabs: {
            children: [
                {
                    stack: {
                        children: [
                            {
                                component: {
                                    name: 'Home'
                                }
                            }
                        ]
                    }
                },
                {
                    stack: {
                        children: [
                            {
                                component: {
                                    name: 'Settings'
                                }
                            }
                        ]
                    }
                },
                {
                    stack: {
                        children: [
                            {
                                component: {
                                    name: appName
                                }
                            }
                        ]
                    }
                }
            ]
        },
    }
};
const loginRoot = {
    root: {
        component: {
            name: 'LoginScreen'
        }
    }
}

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
      },
      bottomTab: {
          fontSize: 14,
          selectedFontSize: 14
      }
})

//监听app启动事件
Navigation.events().registerAppLaunchedListener(async () => {
    //设置根组件界面，在registerAppLaunchedListener回调函数中定义
    Navigation.setRoot(loginRoot);
})


const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke'
  }
});