
/*
 * @Author: zhu.cy@outlook.com 
 * @Date: 2020-12-30 16:26:00 
 * @Last Modified by: frank.zhuchiyu
 * @Last Modified time: 2020-12-30 17:31:02
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Image,
  ImageBackground,
} from 'react-native';
const playIcon = require('./images/play.png');
const volumeIcon = require('./images/sound.png');
const hdIcon = require('./images/hd-sign.png');
const fullScreenIcon = require('./images/full-screen.png');
const flower = require('./images/flower.jpg');
const remoteImage = { uri: `https://farm5.staticflickr.com/4702/24825836327_bb2e0fc39b_b.jpg` }

export default class App extends React.Component {
  render() {
    const name = "01-Blue Behind Green Bloches";
    return (
      <View style={styles.container}>
        <ImageBackground source={remoteImage} style={styles.videoContainer} resizeMode={'contain'}>
          <View style={styles.controlContainer}>
            <Image source={playIcon} style={styles.icon}>

            </Image>
            <Image source={volumeIcon} style={styles.icon}>
              
            </Image>
            <View style={styles.progressBarContainer}>
              <View style={styles.progressBar}>

              </View>
            </View>
            <Image source={hdIcon} style={styles.icon}></Image>
            <Image source={fullScreenIcon} style={styles.icon}></Image>
          </View>

        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  videoContainer: {
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row'
  },
  controlContainer: {
    padding: 10,
    backgroundColor: '#202020',
    flexDirection:'row',
    alignItems: 'center',
    opacity:0.8,
    marginTop: 175


  },
  icon: {
    tintColor: '#fff',
    height: 16,
    width: 16,
    marginLeft: 5,
    marginRight: 5,
  },
  progressBarContainer: {
    backgroundColor: '#000',
    borderRadius: 7,
    flex: 1,
    height: 14,
    margin: 4,
  },
  progressBar: {
    backgroundColor: '#bf161c',
    borderRadius: 5,
    height: 10,
    margin: 2,
    paddingTop: 3,
    width: 80,
    alignItems: 'center',
    flexDirection: 'row',
  }
})
