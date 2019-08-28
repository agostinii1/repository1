import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  Dimensions,
} from 'react-native';
import pic1 from './imgs/curveheader3.png';
import pic2 from './imgs/curve1.jpg';
import pic3 from './imgs/fpic1.png';

const UserBox = props => {
  var {height, width} = Dimensions.get('window');
  var nh = height / 3;
  var circ = width / 10;
  var name = 'Jane Smith';
  var points = '2.3456';
  var TotalTips = 156;
  var SuccessRate = '78%';
  var circ = width / 6;
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          height: height / 12,
          padding: 20,
          backgroundColor: '#292929',
        }}>
        <Image
          source={props.pic}
          style={{
            width: circ - 25,
            height: circ - 25,
            borderRadius: height / 20,
            left: 15,
            position: 'absolute',
            bottom: 30,
            borderWidth: 1,
            borderColor: '#f4f4f4',
            //justifyContent: "center"
          }}
        />
        <View style={{marginLeft: 50, bottom: 19}}>
          <Text style={{color: '#f4f4f4', fontWeight: 'bold'}}>
            {props.name}
          </Text>
          <Text
            style={{
              color: '#f4f4f4',
              fontSize: 10,
              paddingBottom: 5,
              lineHeight: 10,
            }}>
            {props.points} Points
          </Text>
          <Text style={{color: '#f4f4f4', fontSize: 11}}>
            {props.TotalTips} Total Tips {props.SuccessRate} Success Rate
          </Text>
        </View>
      </View>
    </View>
  );
};

export default UserBox;
