import React, {useCallback, useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {Card} from '../components';
import {countryListApi} from '../api';
import {Colors} from '../theme';
import {navigate} from '../services/NavigationService';
import {BorderButton} from '../reuseableComponents';
import {Loader} from '../reuseableComponents';

const Home = ({navigation}) => {
  const [state, setState] = useState({
    countries: [],
    isFetching: true,
  });
  useEffect(() => {
    fetchCountries();
  }, []);

  async function fetchCountries() {
    setState({
      ...state,
      countries: await countryListApi(),
      isFetching: false,
    });
  }
  const _renderItem = useCallback(({item, index}) => {
    const {Country} = item;
    return (
      <Card>
        <Text style={{color: Colors.BLACK}}>{Country}</Text>
      </Card>
    );
  }, []);

  const _renderFooter = useCallback(() => {
    return (
      <BorderButton title={'Globle Data'} onPress={() => navigate('GlobleData')} />
    );
  }, []);

  const {countries, isFetching} = state;
  if (isFetching) {
    return <Loader />;
  }

  return (
    <View>
      <Text style={styles.txt} onPress={() => navigate('Countries')}>
        See More
      </Text>
      <FlatList
        data={countries.slice(0, 5)}
        style={styles.flatList}
        renderItem={_renderItem}
        keyExtractor={item => item.Country}
      />
      {_renderFooter()}
    </View>
  );
};
const styles = StyleSheet.create({
  flatList: {
    width: '100%',
    marginTop: 10,
  },
  txt: {
    margin: 17,
    color: Colors.DARK_INFO,
    textAlign: 'right',
  },
});
export default Home;
