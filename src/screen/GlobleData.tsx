import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {summary} from '../api';
import {Card} from '../components';
import {Loader} from '../reuseableComponents';
import {navigate} from '../services/NavigationService';
import {Colors} from '../theme';
import {Grid, LineChart, XAxis, YAxis} from 'react-native-svg-charts';

const GlobleData = () => {
  const [state, setState] = useState({
    data: {},
    isFetching: true,
  });
  useEffect(() => {
    _apiForSummary();
  }, []);

  async function _apiForSummary() {
    setState({
      ...state,
      data: await summary(),
      isFetching: false,
    });
  }

  function onPress(params) {
    navigate('CountryList');
  }

  function _renderInfo(key, value, style = {}) {
    return (
      <Card>
        <Text style={styles.title}>
          {key}
          <Text style={[styles.subTitle, style]}>{value}</Text>
        </Text>
      </Card>
    );
  }

  const {data, isFetching} = state;
  if (isFetching) {
    return <Loader />;
  }

  const {TotalConfirmed, NewConfirmed, TotalDeaths} = data;

  const yAxis = [0, TotalConfirmed];
  const lines_data = [
    {
      data: [0, TotalConfirmed],
      svg: {stroke: Colors.DARK_INFO},
    },
    {
      data: [0, TotalDeaths],
      svg: {stroke: Colors.DARK_DANGER},
    },
    {
      data: [0, NewConfirmed],
      svg: {stroke: Colors.DARK_SUCCESS},
    },
  ];
  const contentInset = {top: 20, bottom: 20};

  return (
    <View style={styles.container}>
      {_renderInfo('Total Case:\t\t', TotalConfirmed)}
      {_renderInfo('Total New Case:\t\t', NewConfirmed, {
        color: Colors.DARK_SUCCESS,
      })}
      {_renderInfo('Total Deaths:\t\t', TotalDeaths, {
        color: Colors.DARK_DANGER,
      })}

      <Card style={{height: 400, marginHorizontal: 16}}>
        <Text style={styles.label}>{'Historical Data'}</Text>
        <View
          style={{
            height: 340,
            flexDirection: 'row',
          }}>
          <YAxis
            data={yAxis}
            contentInset={contentInset}
            svg={{
              fill: 'grey',
              fontSize: 10,
            }}
            numberOfTicks={10}
            formatLabel={value => `${value}`}
          />
          <LineChart
            style={{flex: 1, marginLeft: 16}}
            data={lines_data}
            svg={{stroke: 'rgb(134, 65, 244)'}}
            contentInset={contentInset}>
            <Grid />
          </LineChart>
        </View>
      </Card>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: Colors.BLACK,
  },
  subTitle: {
    color: Colors.DARK_INFO,
  },
  label: {
    color: Colors.BLACK,
    fontSize: 20,
    textAlign: 'center',
  },
});
export default GlobleData;
