import React,{ useState,useEffect } from 'react';
import { Text, View, Image, StyleSheet, Button, ScrollView, ActivityIndicator, TouchableOpacity,Alert, FlatList } from 'react-native';
import {StylesCss} from '../styles/StylesCss';
import flatlistData from './FlatList';

function TestScreen(props) {

  console.log('flatlist',flatlistData)

  //console.log(flatlistData.sort())
  flatlistData.sort(function (a, b) {
       if(a.categorie.toLowerCase() < b.categorie.toLowerCase())
      return -1;
      if(a.categorie.toLowerCase() > b.categorie.toLowerCase())
      return 1;
      return 0;
    }); 

console.log('flatlist',flatlistData)




  const renderItem = ({item}) => {
    return(
      <TouchableOpacity style={styles.categoriesItemContainer}>
        <View style={{height:2,backgroundColor:'white'}}></View>  
            
        <View style={{flex:1,flexDirection:'row',
            }}>
            <Image
                source={{ uri: item.image}} 
                style={styles.image}
            />
            <View>
                <Text style={styles.nom}>{item.name}</Text>
                <Text style={styles.flatlistItem}>{item.categorie} de {item.adresse}</Text>
            </View>
        </View>
      </TouchableOpacity>
    )
  }
  
    
    return(
        <View style={{flex:1,backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
            <Text style={{textAlign:'center'}}>je suis test</Text>
            <FlatList
                vertical
                showsVerticalScrollIndicator={false}
                numColumns={1}
                data={flatlistData}
                //style={{marginBottom:67}}
                renderItem={renderItem}
                ListEmptyComponent={()=>(
                    <View>
                        <Text style={{textAlign:'center',fontSize:16,color:'orange'}}>Element non trouvable</Text>
                    </View>
                )}
            />
        </View>
    )
}

export default TestScreen;


const styles = StyleSheet.create({
  filter:{ 
      textAlign: 'right', 
      color:'black',
      fontSize:16,
      paddingHorizontal:16,
      paddingVertical:6.5 ,
      fontWeight:'bold'
   },
   categoriesItemContainer: {
       marginBottom:5,
      backgroundColor:'grey',
     },
   nom:{
       marginHorizontal:10,
       marginTop:5,
       fontSize:20,
       fontWeight:'bold',
       textTransform:'uppercase',
       
       color:'white'
     },
     flatlistItem : {
       color :'white',
       marginHorizontal:10,
       marginTop:5,
       fontSize:20,
       textTransform:'capitalize'
     },
     image:{width:70,
       height:65,
       marginTop:5,
       marginHorizontal:5,
       borderRadius:10,
       justifyContent:'center'}
 }
 );