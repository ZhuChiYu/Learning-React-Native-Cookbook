/*
 * @Author: zhu.cy@outlook.com 
 * @Date: 2020-12-31 09:20:05 
 * @Last Modified by: frank.zhuchiyu
 * @Last Modified time: 2021-01-04 15:19:40
 */

import React from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Image,
  ImageBackground,
  TouchableHighlight,
  Text
} from 'react-native';
import {Navigation} from 'react-native-navigation'
export default class passData extends React.Component {
  static options(props) {
    return {
      topBar: {
        title: {
          text: props.name
        }
      }
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topSection}>
          <Text style={styles.topSectionText}>topSectionText</Text>
        </View>
        <View style={styles.bottomSection}>
          <Text style={styles.bottomSectionText}>{this.props.status}</Text>
        </View>
      </View>
        
    )
  }
}

const styles = StyleSheet.create({
  topSection: {
    flex: 1,
    backgroundColor: '#5BC2C1',
    alignItems: 'center'
  },
  midSection: {
    flex: 2,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  bottomSection: {
    flex: 3,
    backgroundColor: '#FD909E',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  topSectionText: {
    fontWeight: 'bold',
    marginTop: 50

  },
  midSectionText: {
    fontWeight: 'bold',
    fontSize: 30

  },
  bottomSectionText: {
    fontWeight: 'bold',
    marginBottom: 30
  },
  container: {
    flex: 1,
  }
})
