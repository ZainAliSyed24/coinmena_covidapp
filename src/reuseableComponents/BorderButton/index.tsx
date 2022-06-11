import React, {Component} from 'react';
import {TouchableOpacity, View, Text, StyleSheet, Image} from 'react-native';
import {Colors, Metrics} from '../../theme';
export default class BorderButton extends Component {
  render() {
    const styles = this.makeStyles();
    const {btnStyle, textStyle, onPress, title, isDisable, icon} = this.props;
    return (
      <TouchableOpacity
        style={styles.touchable}
        onPress={onPress}
        disabled={isDisable ? true : false}>
        <View style={[styles.view, btnStyle]}>
          {this.makeImageIfAny(icon)}
          <Text style={[styles.text, textStyle]}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  makeImageIfAny(icon) {
    const {textColor} = this.props;
    if (icon) {
      return (
        <Image
          source={icon}
          style={{
            marginRight: Metrics.smallMargin,
            tintColor: textColor ? textColor : Colors.WHITE,
          }}
        />
      );
    }
  }

  makeStyles() {
    return StyleSheet.create({
      view: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: this.props.borderColor
          ? this.props.borderColor
          : Colors.INFO,
        borderWidth: 1,
        backgroundColor: this.props.backgroundColor
          ? this.props.backgroundColor
          : Colors.TRANSPARENT,
        paddingLeft: 16,
        paddingRight: 16,
        borderRadius: 6,
        margin: Metrics.baseMargin,
        height: 55,
      },
      touchable: {
        marginLeft: 4,
        marginRight: 4,
        marginBottom: 8,
      },
      image: {
        marginRight: 8,
      },
      text: {
        textAlign: 'center',
        color: this.props.textColor ? this.props.textColor : Colors.INFO,
      },
    });
  }
}
