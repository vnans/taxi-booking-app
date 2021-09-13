import {StyleSheet} from "react-native";

const styles = StyleSheet.create(
    {
    container: {
            flexDirection: 'row',
            padding: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            
         },
image: {
            height: 70,
            width: 80,
            resizeMode: 'contain',           
         },

middleContainer: {
    flex: 1,
    marginHorizontal: 10,
    
},

rightContainer:{
    width: 100,
    flexDirection: 'row',
    justifyContent: 'flex-end',
},

time:{   
    color: '#aaa',   

},
type:{
      fontWeight: 'bold',
      fontSize: 18,
      marginBottom: 5,
},
price:{
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 5,
}

}
)
export default styles;