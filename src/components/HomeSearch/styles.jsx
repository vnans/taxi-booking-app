import {StyleSheet} from "react-native";

const styles = StyleSheet.create(
    {

inputBox: {
   backgroundColor: '#d9d9d9',
   margin:10,
   padding: 10,
   flexDirection: 'row',
   justifyContent: 'space-between',
   alignItems: 'center',
   
},
inputText :{
   color: '#fff',
   fontSize: 20,
   fontWeight: '600',
   color: '#6e6e6e',
},
timeContainer: {
    flexDirection: 'row',
    width: 150,
    padding: 10,
    backgroundColor:'#fff',
    justifyContent: 'space-between',
    borderRadius: 20,

},
row:{
    flexDirection: 'row',
    alignItems:'center',
    padding: 15,
    borderColor: '#dbdbdb',
    borderBottomWidth: 1


},
iconContainer:{
    backgroundColor: '#b3b3b3',
    padding : 10,
    borderRadius: 25,
    margin: 10,

},

destinationText:{
    marginLeft: 10,
    fontWeight: '500',
    fontSize: 19,

}
    }
)
export default styles;