import React, {Component} from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ColorBar from './colorbar';
//import PrintClass from './printClass';

class Stats extends Component {
  state = {TotalTips: 142, Points: 2.6345, SuccessRate: '75%'};
  render() {
    return (
      <View style={{bottom: 40}}>
        <ColorBar
          color={'blue'}
          name={'Points'}
          max={100}
          value={this.state.Points}
          number={this.state.Points}
          progress={0.7}
          bar={70}
          color1={'#A60Af5'}
          color2={'#72f7ff'}
          color3={'#9169f9'}
        />
        <ColorBar
          color={'red'}
          name={'Total Tips'}
          max={300}
          value={this.state.TotalTips}
          number={this.state.TotalTips}
          progress={142 / 300}
          bar={45}
          color1={'#ff1765'}
          color2={'#ffa317'}
          color3={'#ff4f46'}
        />
        <ColorBar
          color={'green'}
          name={'Success Rate'}
          max={'100%'}
          value={this.state.SuccessRate}
          number={this.state.SuccessRate}
          progress={0.75}
          bar={75}
          color1={'#35ffa1'}
          color2={'#48Dc12'}
          color3={'#3df168'}
        />
      </View>
    );
  }
}

export default Stats;
