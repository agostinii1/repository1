import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import {Button} from 'react-native';
//import NavigationBar from 'react-native-navbar';
//import { NavigationBar } from 'navigationbar-react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as Progress from 'react-native-progress';

class Navbar extends Component {
  state = {bt1: false, bt2: false, bt3: true};

  onPress = number => {
    if (number === 1) {
      this.setState({
        bt1: true,
        bt2: false,
        bt3: false,
      });
    } else if (number === 2) {
      this.setState({
        bt1: false,
        bt2: true,
        bt3: false,
      });
    } else if (number === 3) {
      this.setState({
        bt1: false,
        bt2: false,
        bt3: true,
      });
    }
  };
  render() {
    var b1 = false;
    var b2 = false;
    var b3 = true;

    setB = () => {
      b2 = true;
    };
    const styles = StyleSheet.create({
      button: {
        backgroundColor: 'transparent',
        paddingLeft: 20,
        paddingRight: 20,
      },
      buttonPress: {
        backgroundColor: 'transparent',
        paddingLeft: 20,
        paddingRight: 20,
      },
      btext: {
        color: '#aaa',
        fontSize: 15,
      },
      btextPressed: {
        color: '#f4f4f4',
        fontSize: 20,
        bottom: 5,
      },
    });

    return (
      <View style={{flexDirection: 'row', bottom: 20}}>
        <TouchableOpacity
          style={this.state.bt1 ? styles.buttonPress : styles.button}
          onPress={() => {
            this.onPress(1);
          }}>
          <Text style={this.state.bt1 ? styles.btextPressed : styles.btext}>
            Placed Tips
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={this.state.bt2 ? styles.buttonPress : styles.button}
          onPress={() => {
            this.onPress(2);
          }}>
          <Text style={this.state.bt2 ? styles.btextPressed : styles.btext}>
            Post Tips
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={this.state.bt3 ? styles.buttonPress : styles.button}
          onPress={() => {
            this.onPress(3);
          }}>
          <Text style={this.state.bt3 ? styles.btextPressed : styles.btext}>
            Statistics
          </Text>
        </TouchableOpacity>

        <View style={{top: 23, right: 333}}>
          {this.state.bt1 ? (
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={['#A60Af5', '#9169f9', '#72f7ff']}>
              <Progress.Bar
                color={'transparent'}
                borderWidth={0}
                unfilledColor={'transparent'}
                width={25}
                height={4}
                progress={1}></Progress.Bar>
            </LinearGradient>
          ) : null}
        </View>
        <View style={{top: 23, right: 210}}>
          {this.state.bt2 ? (
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={['#A60Af5', '#9169f9', '#72f7ff']}>
              <Progress.Bar
                color={'transparent'}
                borderWidth={0}
                unfilledColor={'transparent'}
                width={25}
                height={4}
                progress={1}></Progress.Bar>
            </LinearGradient>
          ) : null}
        </View>
        <View style={{top: 23, right: 105}}>
          {this.state.bt3 ? (
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={['#A60Af5', '#9169f9', '#72f7ff']}>
              <Progress.Bar
                color={'transparent'}
                borderWidth={0}
                unfilledColor={'transparent'}
                width={25}
                height={4}
                progress={1}></Progress.Bar>
            </LinearGradient>
          ) : null}
        </View>
      </View>
    );
  }
}

export default Navbar;
