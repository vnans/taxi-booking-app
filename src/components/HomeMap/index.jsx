import React from "react";
import MapView, { PROVIDER_GOOGLE,Marker } from 'react-native-maps';
import {View ,Image,FlatList,Text } from "react-native" ;
import { PinchGestureHandler } from "react-native-gesture-handler";
import cars from '../../assets/data/cars';

const HomeMap = () => {

    const getImage = (type) => {
        if(type === 'UberX'){
            return require('../../assets/images/top-UberX.png');
        }
        if(type === 'Comfort'){
            return require('../../assets/images/top-Comfort.png');
        }
        if(type === 'UberXL'){
            return require('../../assets/images/top-UberXL.png');
        }
    }
    return(
        <View style={{ 
            height: 300 , 
            justifyContent: 'center', 
            backgroundColor:"#a0abff" ,
            alignItems: 'center'
            }} >

            {/* <MapView
            style={{ width: '100%' , height: '100%'}}
            provider={PROVIDER_GOOGLE}
                initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
                }}> 
                
             </MapView>
            */}
        {/* <FlatList 
        data={cars}
        renderItem = {({item}) => (
        <Marker 
                coordinate={{ latitude : item.latitude , longitude : item.longitude }}
                style={{ width: 50 , height: 50 }}>
                <Image 
                style={{ width: 20 , height: 20 , resizeMode: 'contain' }} 
                source={getImage(item.type)} />
           
            </Marker>

        ) }
        /> */}

            
       

        </View>
    );
};

export default HomeMap;