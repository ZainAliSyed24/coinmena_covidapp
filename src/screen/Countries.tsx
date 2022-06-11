import React, {useCallback, useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {Card} from '../components';
import {countryListApi} from '../api';
import {Colors} from '../theme';
const Countries = ({navigation}) => {
  const [countryList, setcountryList] = useState([]);
  useEffect(() => {
    fetchCountries();
  }, []);

  async function fetchCountries() {
    setcountryList(await countryListApi());
  }
  const _renderItem = useCallback(({item, index}) => {
    const {Country} = item;
    return (
      <Card key={index}>
        <Text style={{color: Colors.BLACK}}>{Country}</Text>
      </Card>
    );
  }, []);

  return (
    <View>
      <FlatList
        data={countryList}
        style={styles.flatList}
        renderItem={_renderItem}
        keyExtractor={item => item.ID}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  flatList: {
    width: '100%',
    marginTop: 10,
  },
});
export default Countries;
