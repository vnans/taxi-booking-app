import React from "react";
import {View , Text, Dimensions } from 'react-native';
import HomeMap from '../../components/HomeMap';
import UberTypes from '../../components/UberTypes';

const SearchResults = () => {
	return(
    <View style={{ display: 'flex' }} >
        <View style={{ height: Dimensions.get('window').height - 400 }}>
        <HomeMap/>
        </View>
        <View style={{ height: 400 }}>
        <UberTypes/>
        </View>
        
    </View>
)
};
export default SearchResults;
