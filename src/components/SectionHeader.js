import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PureRenderMixin from 'react-addons-pure-render-mixin';

const styles = Object.assign({}, StyleSheet.create({
  titleText: {
    fontSize: 25,
    fontWeight: 'bold'
  }
}));

class SectionHeader extends Component {
  static propTypes = {
    sectionTitle: PropTypes.string.isRequired
  };

  mixins: [PureRenderMixin];

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text style={styles.titleText}>
        {this.props.sectionTitle}
        </Text>
      </View>
    );
  }
}

export default SectionHeader;
