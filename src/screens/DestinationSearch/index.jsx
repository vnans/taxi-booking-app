import React from "react";
import {View , SafeAreaView} from 'react-native';
import { TextInput } from "react-native-gesture-handler";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useState } from 'react';
import("react-native-google-places-autocomplete");
import styles from './styles'

const  DestinationSearch = () => {
    const [ fromText, setFromText ] = useState('');
    const [ destinationText, setDestinationText ] = useState('') ;

    const [ originPlace , setOriginPlace ] = useState('');
    const [ destinationPlace, setDestinationPlace ] = useState('') ;

	return(
    <SafeAreaView>
    <View style={styles.container}>
    <GooglePlacesAutocomplete
      placeholder='Depuis où'
      onPress={(data, details = null) => {
          setDestinationPlace( {data,details} );
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      query={{
        key: '_API_KEY_',
        language: 'en',
      }}
      styles={{
        textInput : styles.textInput,
      }}
    />

    <GooglePlacesAutocomplete
      placeholder='A où'
      onPress={(data, details = null) => {
          setDestinationPlace( {data,details} );
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      query={{
        key: '_API_KEY_',
        language: 'en',
      }}
      styles={{
        textInput : styles.textInput,
      }}
    />

    </View>
    </SafeAreaView>
)
};
export default DestinationSearch;
