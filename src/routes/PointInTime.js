import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
} from 'react-native';
import {
  Actions
} from 'react-native-router-flux';

class PointInTime extends Component {

  render() {
    return (
      <TouchableHighlight onPress={Actions.home}>
        <View>
          <Text> Cheeeeeeeeeeee! </Text>
        </View>
      </TouchableHighlight>
    );
  }
}
export default PointInTime;
