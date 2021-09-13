import React from "react";
import { View, Text } from "react-native";
import styles from './styles';

const CovidMessage = () => {

    return(

        <View style={styles.container}> 
            <Text style={styles.title} > Voyagez seulement si c'est neccessaire </Text>
            <Text style={styles.text}> Voyagez seulement si c'est neccessaire,Voyagez seulement si c'est neccessaire,Voyagez seulement si c'est neccessaire,Voyagez seulement si c'est neccessaire </Text>
            <Text style={styles.learnMore} > lire la suite </Text>
        </View>
    )
};

export default CovidMessage;