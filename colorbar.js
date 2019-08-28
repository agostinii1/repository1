import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ProgressBarAndroid,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as Progress from 'react-native-progress';

const ColorBar = props => {
  var {height, width} = Dimensions.get('window');
  var barw = width * props.progress;
  return (
    <View style={{padding: 10}}>
      <View style={{flexDirection: 'row', paddingBottom: 4}}>
        <Text style={{color: '#e5e5e5'}}>{props.name}</Text>
        <Text
          style={{
            color: '#c4c4c4',
            left: width / 1.5,
            position: 'absolute',
            top: 10,
            fontSize: 10,
          }}>
          {' '}
          {props.max}
        </Text>
      </View>
      <View style={{paddingTop: 5}}>
        <Progress.Bar
          progress={props.progress}
          width={300}
          height={4}
          color={'transparent'}
          borderWidth={0}
          unfilledColor="grey"
          style={{position: 'relative'}}
        />
      </View>
      <View style={{bottom: 6, paddingBottom: 5}}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={[props.color1, props.color3, props.color2]}
          style={{position: 'absolute'}}>
          <Progress.Bar
            progress={props.progress}
            width={300 * props.progress}
            height={8}
            color={'transparent'}
            borderWidth={0}
            unfilledColor="transparent"
            style={{position: 'relative'}}
          />
        </LinearGradient>
      </View>

      <Text style={{color: '#c7c7c7', fontSize: 25}}> {props.number}</Text>
    </View>
  );
};

export default ColorBar;
