import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Colors, Metrics} from '../../theme';

function Card(props) {
  const {onPress, children, style} = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.cardStyle, style]}
      disabled={onPress ? false : true}>
      {children}
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  cardStyle: {
    borderRadius: 8,
    backgroundColor: Colors.WHITE,
    padding: 16,
    shadowColor: Colors.BLACK,
    marginHorizontal: Metrics.baseMargin,
    marginVertical: Metrics.smallMargin,

    shadowOffset: {
      width: 0,
      height: 13,
    },
    shadowRadius: 26,
    shadowOpacity: 1,
    elevation: 5,
  },
});
export default Card;
