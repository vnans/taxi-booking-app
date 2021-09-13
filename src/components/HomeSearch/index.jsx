import React from "react";
import {View , Text } from 'react-native';
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Entypo from "react-native-vector-icons/Entypo";

import styles from './styles';



const HomeSearch = () => {
    return(

    <View>
        
        {/* input box  */}
        <View style={styles.inputBox }  > 
            <Text  style={styles.inputText } > Où allez vous ?</Text>
            <View style={styles.timeContainer }>
                <AntDesign name={'clockcircle'} size={16} color={'#535353'} />
                <Text>Maintenant</Text>
                <MaterialIcons name= {'keyboard-arrow-down'} size={16}/>
            </View>
        </View>
        {/* previews destination */}
        <View style={styles.row}  > 
            <View style={styles.iconContainer} >
                <AntDesign name={'clockcircle'} size={20} color={'#fff'} />
            </View>
            <Text style={styles.destinationText}> La tournée des bars </Text>
        </View>

        {/* home destination  */}
        <View style={styles.row }  > 
            <View style={[ styles.iconContainer , {backgroundColor: '#218cff'}]} >
                <Entypo name={'home'} size={20} color={'#fff'} />
            </View>
            <Text style={styles.destinationText}> Home  </Text>
        </View>

    </View>
        
    );

    
};
export default HomeSearch ;