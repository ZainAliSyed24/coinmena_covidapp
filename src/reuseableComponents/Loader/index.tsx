import React from 'react';
import {ActivityIndicator, View} from 'react-native';
const Loader = () => (
  <View style={[styles.container]}>
    <ActivityIndicator color={'red'} size="large" />
  </View>
);

const styles = {
  container: {
    flex: 1,
    alignItem: 'center',
    justifyContent: 'center',
  },
};

export default Loader;
