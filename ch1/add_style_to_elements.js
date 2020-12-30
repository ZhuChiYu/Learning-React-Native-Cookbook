/*
 * @Author: zhu.cy@outlook.com 
 * @Date: 2020-12-30 16:26:00 
 * @Last Modified by: frank.zhuchiyu
 * @Last Modified time: 2020-12-30 16:41:05
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

export default class App extends React.Component {
  render() {
    const name = "01-Blue Behind Green Bloches";
    return (
      <View style={styles.container}>
        <View style={styles.innerContainer} />
        <Text style={styles.title}>
          <Text style={styles.subtitle}>Playing:</Text> {name}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    marginTop: 100,
    backgroundColor: '#e67e22',
    borderRadius: 5,
  },
  innerContainer: {
    backgroundColor: '#d35400',
    height: 50,
    width: 100,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: '200',
    color: '#fff',
    position: 'absolute',
    /*增加Text的背景颜色是为了防止ios设备UI显示错误，
    react native会设置组件的背景颜色为父组件的背景颜色*/
    backgroundColor: 'transparent',
    top: 12,
    left: 10,
  },
  subtitle: {
    fontWeight: 'bold',
  },
})
