import {StyleSheet} from 'react-native'
import { fontSize } from 'styled-system';

export const StylesCss = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#4169E1',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 0,
    
      },
      infoLogin: {
        marginHorizontal: 0,
        width: 400,
        height: 400,
        backgroundColor: 'grey',
        alignItems: 'center',
        borderRadius: 50,
      },
    
      textConnexion: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 25,
        marginBottom: 30,
      },
      buttonContenair: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        marginTop: 30,
      },
      textlogo: {
        color: 'white',
        fontSize: 30,
        marginTop: 25,
        marginBottom: 50,
        textAlign: 'center',
        fontWeight: 'bold',
      },
      marker: {
        width: 30,
        height: 30,
      },
      text: {
        color: 'white',
        fontSize: 16,
        opacity: 0.5,
        marginTop: 10,
        marginLeft: 130,
      },
      button: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 25,
      },
    
      input: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '80%',
        height:50,
        marginTop: 10,
        borderColor: 'white',
        borderRadius:23,
        paddingVertical:0,
        borderWidth: 1,
        paddingHorizontal:10,
        color:'white',
        fontSize:20,
        
      },
    
      inputPosi: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '80%',
        height:45,
        marginVertical: 15,
        justifyContent:"space-between",
      
        paddingVertical: 2,
        alignSelf:'center',
        paddingHorizontal:10,
      },

      //// FlaslitData pour le composent HomeScreen
      flatlistData : {
         backgroundColor:'grey',
      },
      flatlistItem : {
        color :'white',
        padding:5,
        fontSize:20,
        textTransform:'capitalize'
      },
      
      search: {
        //paddingHorizontal: 10,
        height: 30,
        width: '100%',
        color: 'white',
        fontSize:20,
        textAlign:'center',
        fontStyle:'italic',
        //backgroundColor:'yellow'
      },
      butAjouFiltre: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        margin: 10,
        //backgroundColor:'red',
        justifyContent:'space-between'
      },

      //"##########################" Ajout Lieu

      ajoutContainer:{
        flex:1,
        backgroundColor:'grey',
        
      },
      inputAjout:{
        alignSelf:'center',
        width: '80%',
        height:45,
        marginBottom: 20,
        borderColor: 'white',
        borderRadius: 23,
        padding:8,
        borderWidth: 1,
        fontSize:20,
        backgroundColor:'white',
        paddingLeft:10,
      },
     
      h2: {
        fontSize:50,
        marginVertical:10
      },
     inputPicker:{
        alignSelf:'center',
        width: '80%',
        height:45,
        marginBottom: 20,
        borderColor: 'white',
        borderRadius: 23,
      
        borderWidth: 1,
        fontSize:20,
     },
     choseImage:{ 
        alignSelf:'center',
        width: '80%',
        height:45,
        marginBottom: 20,
        borderColor: 'white',
        borderRadius: 23,
        paddingVertical:8,
        borderWidth: 1,
        backgroundColor:'white',
        paddingLeft:10,
      },
      inputView: {
        color:'grey',
        fontSize:20,
        paddingLeft:3
      },
      inputViewPosi: {
        color:'white',
        fontSize:20,
        paddingLeft:5,
        alignSelf:'center',
        justifyContent:'space-between'
      },
    
      nom:{
        marginTop:15,
        marginBottom:10,
        fontSize:30,
        fontWeight:'bold',
        textTransform:'uppercase',
        textAlign:'center',
        color:'white'
    },
      buttonPressable:{
        width:'40%',
        alignSelf:'flex-end',
        margin:50,
        backgroundColor:"yellow"
      }
});