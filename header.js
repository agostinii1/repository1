import React from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import pic1 from './imgs/curveheader3.png';
import pic2 from './imgs/curve1.jpg';
import {Icon} from 'react-native-elements';
//import {Icon} from 'react-native-elements';

export default function Header() {
  var {height, width} = Dimensions.get('window');
  var nh = height / 3;
  var circ = width / 6;
  var name = 'John Doe';
  var points = '2.6354';

  return (
    <View style={{top: 0}}>
      <Image
        source={pic1}
        style={{width: width, height: nh, position: 'relative'}}
      />
      <View style={{position: 'absolute', top: height / 10}}>
        <Image
          source={pic2}
          style={{
            width: circ,
            height: circ,
            borderRadius: height / 8,
            left: width / 3.5,
            position: 'absolute',
            borderWidth: 2,
            borderColor: '#f4f4f4',
            //justifyContent: "center"
          }}
        />
        <Text
          style={{
            color: '#fff',
            fontSize: height / 35,
            //position: "absolute",
            left: width / 2,
            // flexDirection: "row"
          }}>
          {name}
        </Text>
        <Text
          style={{
            color: '#fff',
            fontSize: height / 35,
            //position: "absolute",
            left: width / 2,
            // flexDirection: "row"
          }}>
          {points}
        </Text>

        <Text
          style={{
            color: '#fff',
            fontSize: height / 35 - 8,
            //position: "absolute",
            left: width / 2,
            // flexDirection: "row"
          }}>
          Points
        </Text>
        <View style={{left: width / 20, position: 'absolute', top: 0}}>
          <Icon
            name="left"
            type="antdesign"
            color="#d4d4d4"
            onPress={() => alert('This would take you back')}
          />
        </View>

        <View style={{left: width / 1.15, position: 'absolute', top: 0}}>
          <Icon
            name="setting"
            type="antdesign"
            color="#d4d4d4"
            onPress={() => alert('This is where settings would be')}
          />
        </View>
      </View>
    </View>
  );
}
