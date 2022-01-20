import React, { useState } from 'react';
import { StyleSheet,Text,Image, View, ScrollView, Dimensions, } from 'react-native';
import MapView from 'react-native-maps';

const {width} = Dimensions.get("window");
const height = width*100/ 180;

function DetailScreen(props) {

    const nom = props.route.params.nom;
    const telephone = props.route.params.telephone;
    const adresse = props.route.params.adresse;
    const photo_item = props.route.params.photo_item;
    const ville = props.route.params.ville;
    const latitude = props.route.params.latitude;
    const longitude = props.route.params.longitude;

    const [lat , setLat] = useState(latitude);
    const [long , setLong] = useState(longitude);

    const [active, setActive] = useState(0);
    const images = [
        photo_item,
            "https://files.voetbalprimeur.nl/news/2019/12/29/v2_large_ea5ab15af0890185f44b90d714a3673e0af27a67.jpg",
            "https://www.calcionews24.com/wp-content/uploads/2020/07/Ronaldo-2.jpg",
            "https://s.hs-data.com/picmon/fc/3dPL_723564_l.jpg",
            "https://files.voetbalprimeur.nl/news/2019/12/29/v2_large_ea5ab15af0890185f44b90d714a3673e0af27a67.jpg",
            "https://www.calcionews24.com/wp-content/uploads/2020/07/Ronaldo-2.jpg",
            "https://s.hs-data.com/picmon/fc/3dPL_723564_l.jpg", 
    ]

///////////// fonction qui permet le changement de la paginnation ///////////
    const change = ({nativeEvent}) => {
        const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
        if(slide!== active){
            setActive(slide);
        }
    }

    return(
        <View style={styles.container}>
            <View style={styles.contenairText}>
                <Text style={styles.nom}>{nom}</Text>
                
                <View style={{flexDirection:'row',margin:5}}>
                    <Image source={require('../images/icons/home.png')} style={styles.icon}/>
                    <Text style={styles.adresse}>{adresse}</Text>
                </View>

                <View style={{flexDirection:'row',margin:5,}}>
                    <Image source={require('../images/icons/phone.png')} style={styles.icon}/>
                    <Text style={styles.phone}>{telephone}         ville: {ville}</Text>
                </View>            
            </View>

            <View style={{borderWidth:2, borderColor:'white'}}/>

            <View >
                <ScrollView 
                   pagingEnabled 
                   horizontal
                   onScroll={change}
                   showsHorizontalScrollIndicator={false} 
                   style={{width,height,}}>
                    {
                        images.map((image,index) => (
                        <Image 
                            source={{uri: image}}
                            key={index}
                            style={{width,height,resizeMode:'contain',}}
                        />
                        ))
                    }
                </ScrollView>
                <View style={styles.pagination}>
                    {
                        images.map((i,k)=> (
                            <Text key={k} style={k==active ? styles.paginActiveText : styles.paginText}>⬤</Text> 
                        ))  
                    }
                    
                </View>
            </View>

            <View style={{borderWidth:2, borderColor:'white'}}/>

            <View style={styles.contenairMaps}>
            <MapView
                //mapType="satellite"
                style={{width:'100%',height:'100%'}}
                showsUserLocation={true}
                initialRegion={{
                    latitude: lat,
                    longitude: long,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.012
                }}>
                <MapView.Marker
                    coordinate={{
                        latitude: lat,
                        longitude: long,
                    }}
                    title="nome"
                    /> 
                </MapView>
            </View>
        </View>
    )
}

export default DetailScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'grey'

    },
    contenairText:{
        
        flexDirection:'column',
        width:'100%',
       // marginBottom:10,
        justifyContent:'center',
    },
    nom:{
        marginTop:5,
        fontSize:30,
        fontWeight:'bold',
        textTransform:'uppercase',
        textAlign:'center',
        color:'white'
    },
    adresse:{
        fontSize:20,
        textTransform:'capitalize',
        color:'white'
    },
    phone:{
        fontSize:20,
       
        marginBottom:4,
      
        color:'white'
    },
    icon:{
        width: 20,
        height: 20,
         tintColor: '#fff',
         marginRight:10,
         alignSelf:'center' 
      },

    contenaierImage:{
        flex:1,
        //backgroundColor:'yellow',
        width:'100%',
        height:'33%',
    },
    image:{
        width:'100%',
        height:'33%',
        alignItems:'center',
        justifyContent:'center'
    },
    pagination:{
        flexDirection:'row',
        position:'absolute',
        bottom:0,
        alignSelf:'center'
    },
    paginText:{
        fontSize:20,
        color:'grey',
        opacity:2,
        margin:3
    },
    paginActiveText:{
        fontSize:20,
        color:'white',
        margin:3
    },

    contenairMaps:{
        //backgroundColor:'green',
        width:'100%',
        height:'60%',
    },
    })