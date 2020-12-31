/*
 * @Author: zhu.cy@outlook.com 
 * @Date: 2020-12-31 09:20:05 
 * @Last Modified by: frank.zhuchiyu
 * @Last Modified time: 2020-12-31 11:27:34
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Image,
  ImageBackground,
  TouchableHighlight,
  Text
} from 'react-native';
const heartIcon = require('./images/heart.png');
const textContent = 'Do you like this app?'


export default class App extends React.Component {
  state = {
    liked: false,
  };

  handleButtonPress = () => {
    this.setState({
      liked: !this.state.liked
    })

  }
  render() {
    const LikedStyles = this.state.liked ? styles.liked : undefined
    return (
      <View style={styles.container}>
        {/* 通过underlayColor属性来设置TouchableHighlight被按下去的颜色，默认为黑色*/}
        <TouchableHighlight style={styles.button} underlayColor='#fefefe' onPress={()=>{this.handleButtonPress()}}>
          <Image source={heartIcon} style={[styles.icon,LikedStyles]}>
          </Image>

        </TouchableHighlight>
        
        <Text style={styles.text} >
          {textContent}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    alignItems:'center',
  },
  button: {
    
    flex: 1,
  },
  icon: {
    height: 200,
    width: 200,
    tintColor: '#F1F1F1' // 该属性用于更改图像的颜色
  },
  liked: {
    tintColor: '#F00'
  },
  text: {
    marginTop: 220,
  },
})
