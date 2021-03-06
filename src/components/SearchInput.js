import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  TextInput,
  Alert,
  Text,
} from 'react-native';
import {Color} from '../constants/Color';
import SelectPicker from './SelectPicker';

const W = Dimensions.get('window').width / 3;
const style = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
  },

  searchBox: {
    flex: 8,
    alignItems: 'flex-end',
    borderBottomWidth: 0.2,
    backgroundColor: Color.WHITE,
    height: 30,
    borderRadius: 15,
    paddingHorizontal: 10,
  },
});
export default function SearchInput() {
  //   Alert.alert('rendered')
  return (
    <View style={style.searchContainer}>
      <View style={{flex:2 , justifyContent:'center'}}>
        <SelectPicker />
      </View>
      <TextInput style={style.searchBox} />
    </View>
  );
}
