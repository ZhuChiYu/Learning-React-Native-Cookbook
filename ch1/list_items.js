/*
 * @Author: zhu.cy@outlook.com 
 * @Date: 2020-12-31 09:20:05 
 * @Last Modified by: frank.zhuchiyu
 * @Last Modified time: 2020-12-31 15:47:58
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  View,
  Image,
  ImageBackground,
  TouchableHighlight,
  Text
} from 'react-native';
import data from './data/sales.json';
const basketIcon = require('./images/basket.png');


export default class App extends React.Component {
  

  renderRow(item) {
    return (
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Image source={basketIcon} style={styles.icon}/>
        </View>
        
        <View style={styles.textContainer}>
          <View style={styles.info}>
            <Text style={styles.itemsStyle}>
              {item.item}Items
            </Text>
            <Text style={styles.addressStyle}>{item.address}</Text>
          </View>
          <View style={styles.total}>
            <Text style={styles.dateStyle}>
              {item.date}
            </Text>
            <Text style={styles.totalStyle}>${item.total}</Text>
          </View>
          
        </View>

      </View>
    )

  }
  

  render() {
    return (
      <View style={styles.mainContainer}>
        <Header>Sales</Header>
        <FlatList
          data = {data}
          renderItem={({ item, index, separators }) => (
            <TouchableHighlight
              onShowUnderlay={separators.highlight}
              onHideUnderlay={separators.unhighlight}
            >
              {this.renderRow(item)}
            </TouchableHighlight>
          )}
        />

      </View>
        
    )
  }
}

const Header = (props) => (
  <Text style={[styles.HeaderStyle, props.style]}>
    {props.children}
  </Text>
)

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFF'

  },
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    marginLeft: 10,
    marginRight: 10,
    paddingTop: 20,
    paddingBottom: 20,
    borderColor: '#f1f1f1'
  },
  button: {
    flex: 1,
  },
  iconContainer: {
    backgroundColor: '#feb401',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 50,
    borderRadius: 25,
    borderColor: '#feaf12',
    borderWidth: 1

  },
  icon: {
    height: 22,
    width: 22,
    tintColor: '#FFF'

  },
  textContainer: {
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row'
  },
  info: {
    marginLeft: 25,
    marginRight: 25,

  },
  itemsStyle: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 16,
    marginBottom: 5
  },
  addressStyle: {
    color: '#ccc',
    fontSize: 14

  },
  total: {
    width: 60
  },
  dateStyle: {
    fontSize: 12,
    marginBottom: 5

  },
  totalStyle: {
    fontSize: 25,
    color: '#1cad61',
    fontWeight: 'bold'

  },
  text: {
    marginTop: 220,
  },
  HeaderStyle: {
    backgroundColor: '#0f1b29',
    color: '#FFF',
    padding:10,
    paddingTop: 40,
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center'
  },
})
