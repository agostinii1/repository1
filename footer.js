import React from 'react';
import {Text, View, Image} from 'react-native';
import UserBox from './userbox.js';
import pic3 from './imgs/fpic1.png';
import pic2 from './imgs/curve1.jpg';
import pic1 from './imgs/curveheader3.png';

export default function Footer() {
  return (
    <View style={{bottom: 20}}>
      <Text
        style={{color: '#c4c4c4', paddingBottom: 30, fontSize: 10, right: 30}}>
        Compare to Terimognish
      </Text>

      <View style={{right: 50}}>
        <UserBox
          style={{top: 0, right: 40}}
          name={'Jane Smith'}
          points={'2.3456'}
          TotalTips={156}
          SuccessRate={'78%'}
          pic={pic3}
        />
      </View>
      <View style={{left: 215, bottom: 57}}>
        <UserBox
          style={{top: 0, right: 40}}
          name={'Carly Jones'}
          points={'1.7385'}
          TotalTips={80}
          SuccessRate={'64%'}
          pic={pic2}
        />
      </View>
    </View>
  );
}
