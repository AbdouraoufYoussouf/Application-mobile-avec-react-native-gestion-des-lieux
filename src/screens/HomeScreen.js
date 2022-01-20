import React, { useState ,useEffect, useLayoutEffect} from 'react';
import { Text, View, Image, TextInput, FlatList, StyleSheet, ActivityIndicator,TouchableOpacity, ScrollView } from 'react-native';
//import ModalDropdown from 'react-native-modal-dropdown';
import * as Animatable from 'react-native-animatable';
import { AntDesign } from '@expo/vector-icons';
import {StylesCss} from '../styles/StylesCss';

import firebase from '../firebase/auth';

function HomeScreen(props) {

    const myFilter = ["categorie", "ville"];
    const [filter,setFilter] = useState('nom');
    const [search,SetSearch] = useState('')
    const [sortType, setSortType] = useState('nom');

    const [filterLieu,setFilterLieu] = useState([]);

    const [Lieu, setLieu] = useState([]);
    const bieu =[];

    const [errorMessage,seterrorMessage] = useState('')

    const goToAjout = () => props.navigation.navigate("AJOUT");

    

//////////      Changer l'option de filter   ///////////

    const updateFilter = (value) => {
        setSortType(value)
        const textValue= myFilter[value]
        setFilter(textValue)
    }

/////////////     trier    //////////

/* useEffect(() => {
    const sortArray = type => {
      const types = {
        albums: 'albums',
        members: 'members',
        formed: 'formed_in',
      };
      const sortProperty = types[type];
      const sorted = [...bands].sort((a, b) => b[sortProperty] - a[sortProperty]);
      setData(sorted);
    };

    sortArray(sortType);
  }, [sortType]); */
    
    Lieu.sort(function (a, b) {
        
        if( a[filter].toLowerCase() < b[filter].toLowerCase())
             return -1;
             console.log(filter)
        if(a[filter].toLowerCase() > b[filter].toLowerCase())
             return 1;
        return 0;
    }); 

/////////////     Recherche    //////////

    const ChangeText=(text)=>{
        console.log('textChanged: ',text)
        let filterArray = filterLieu
        let searchResult = filterArray.filter(lieux =>
            lieux.nom.includes(text))
            setLieu(searchResult)
    }
/////////////     deconnection    //////////

    const signOut = () => 
    firebase.auth().signOut().then(() => 
      this.props.navigation.navigate('Login')
    )
    .catch(error => seterrorMessage(error.message ))

    /////////////     get data to firebase    //////////

    const clearInput = () => {
       SetSearch('')
  }
    
     useEffect(()=> {
         firebase.db.collection('Lieu').doc("agence").collection('agence').onSnapshot(querySnapshot => {
            querySnapshot.docs.forEach(doc =>{
              const {adresse,categorie, telephone,photo_item,nom,ville,latitude,longitude} = doc.data()
              bieu.push({ id: doc.id,adresse,categorie,nom,photo_item,ville,telephone,latitude,longitude })
            });
            
         }); 
     }, []) 

     useEffect(()=> {
         firebase.db.collection('Lieu').doc("assurence").collection('assurence').onSnapshot(querySnapshot => {
            querySnapshot.docs.forEach(doc =>{
              const {adresse,categorie, telephone,photo_item,nom,ville,latitude,longitude} = doc.data()
              bieu.push({ id: doc.id,adresse,categorie,nom,photo_item,ville,telephone,latitude,longitude })
            });
            
         }); 
     }, []) 

     useEffect(()=> {
         firebase.db.collection('Lieu').doc("banque").collection('banque').onSnapshot(querySnapshot => {
            querySnapshot.docs.forEach(doc =>{
              const {adresse,categorie, telephone,photo_item,nom,ville,latitude,longitude} = doc.data()
              bieu.push({ id: doc.id,adresse,categorie,nom,photo_item,ville,telephone,latitude,longitude })
            });
            
         }); 
     }, []) 

     useEffect(()=> {
         firebase.db.collection('Lieu').doc("boutique").collection('boutique').onSnapshot(querySnapshot => {
            querySnapshot.docs.forEach(doc =>{
              const {adresse,categorie, telephone,photo_item,nom,ville,latitude,longitude} = doc.data()
              bieu.push({ id: doc.id,adresse,categorie,nom,photo_item,ville,telephone,latitude,longitude })
            });
            
         }); 
     }, []) 

     useEffect(()=> {
         firebase.db.collection('Lieu').doc("cafe").collection('cafe').onSnapshot(querySnapshot => {
            querySnapshot.docs.forEach(doc =>{
              const {adresse,categorie, telephone,photo_item,nom,ville,latitude,longitude} = doc.data()
              bieu.push({ id: doc.id,adresse,categorie,nom,photo_item,ville,telephone,latitude,longitude })
            });
            
         }); 
     }, []) 

     useEffect(()=> {
         firebase.db.collection('Lieu').doc("ecole").collection('ecole').onSnapshot(querySnapshot => {
            querySnapshot.docs.forEach(doc =>{
              const {adresse,categorie, telephone,photo_item,nom,ville,latitude,longitude} = doc.data()
              bieu.push({ id: doc.id,adresse,categorie,nom,photo_item,ville,telephone,latitude,longitude })
            });
            
         }); 
     }, []) 

     useEffect(()=> {
         firebase.db.collection('Lieu').doc("hotel").collection('hotel').onSnapshot(querySnapshot => {
            querySnapshot.docs.forEach(doc =>{
              const {adresse,categorie, telephone,photo_item,nom,ville,latitude,longitude} = doc.data()
              bieu.push({ id: doc.id,adresse,categorie,nom,photo_item,ville,telephone,latitude,longitude })
            });
            
         }); 
     }, []) 

     useEffect(()=> {
         firebase.db.collection('Lieu').doc("medcin").collection('medcin').onSnapshot(querySnapshot => {
            querySnapshot.docs.forEach(doc =>{
              const {adresse,categorie, telephone,photo_item,nom,ville,latitude,longitude} = doc.data()
              bieu.push({ id: doc.id,adresse,categorie,nom,photo_item,ville,telephone,latitude,longitude })
            });
            
         }); 
     }, []) 

     useEffect(()=> {
         firebase.db.collection('Lieu').doc("pharmacie").collection('pharmacie').onSnapshot(querySnapshot => {
            querySnapshot.docs.forEach(doc =>{
              const {adresse,categorie, telephone,photo_item,nom,ville,latitude,longitude} = doc.data()
              bieu.push({ id: doc.id,adresse,categorie,nom,photo_item,ville,telephone,latitude,longitude })
            });
            
         }); 
     }, []) 

     useEffect(()=> {
         firebase.db.collection('Lieu').doc("police").collection('police').onSnapshot(querySnapshot => {
            querySnapshot.docs.forEach(doc =>{
              const {adresse,categorie, telephone,photo_item,nom,ville,latitude,longitude} = doc.data()
              bieu.push({ id: doc.id,adresse,categorie,nom,photo_item,ville,telephone,latitude,longitude })
            });
           
         }); 
     }, []) 

     useEffect(()=> {
         firebase.db.collection('Lieu').doc("restaurant").collection('restaurant').onSnapshot(querySnapshot => {
            querySnapshot.docs.forEach(doc =>{
              const {adresse,categorie, telephone,photo_item,nom,ville,latitude,longitude} = doc.data()
              bieu.push({ id: doc.id,adresse,categorie,nom,photo_item,ville,telephone,latitude,longitude })
            });
           
         }); 
     }, []) 

     useEffect(()=> {
         firebase.db.collection('Lieu').doc("snack").collection('snack').onSnapshot(querySnapshot => {
            querySnapshot.docs.forEach(doc =>{
              const {adresse,categorie, telephone,photo_item,nom,ville,latitude,longitude} = doc.data()
              bieu.push({ id: doc.id,adresse,categorie,nom,photo_item,ville,telephone,latitude,longitude })
            });
            setLieu(bieu)
            setFilterLieu(bieu)
         }); 
     }, []) 

     return (
      <View style={StylesCss.flatlistData}>
          <View >
              

              <View style={{height: 45,width: '95%', marginTop:10,alignSelf:'center',}}>

                <Animatable.View animation="slideInRight" duration={1200} style={{ height: 45, backgroundColor: 'white', flexDirection: 'row', alignItems: 'center', borderRadius :12 }}>
                    <TextInput placeholder="Search" 
                        style={{height: 45,width:'95%', fontSize: 24, marginLeft: 15, flex: 1 ,textTransform:'lowercase'}}
                        onChangeText={text => ChangeText(text)}
                        value={search}
                    />
                    <Animatable.View >
                        <TouchableOpacity>
                            <AntDesign  name="close" size={24} color="black" style={{marginRight:10}}
                              onPress={clearInput}
                            />
                        </TouchableOpacity>
                    </Animatable.View>
                </Animatable.View>
                
              </View>
              <View style={StylesCss.butAjouFiltre}>
                    <View style={{justifyContent:'center',alignItems:'center',backgroundColor:'white',}}>
                        <TouchableOpacity onPress={goToAjout}>
                            <Text style={{fontWeight:'bold',paddingHorizontal:10,paddingVertical:7,fontSize:16}}>AJOUTER</Text>
                        </TouchableOpacity>
                    </View>

                  {/*   <View style={{justifyContent:'center'}}>
                        <ModalDropdown 
                            options={['Categorie', 'Ville']}
                            defaultValue = {"FILTRER"}
                            style = {{ backgroundColor:'white',}}
                            textStyle = {styles.filter}
                            dropdownTextStyle={{backgroundColor:'grey',color:'white',fontSize:20,}}
                            dropdownStyle={{width:100,height:90,}}
                            onSelect = {(value) => updateFilter(value)}
                        />
                    </View> */}   
              </View>
          </View>

          <FlatList
                vertical
                showsVerticalScrollIndicator={false}
                numColumns={1}
                data={Lieu}
                //style={{marginBottom:67}}
                renderItem={({ item }) => (
                   
                    <ScrollView >
                    <TouchableOpacity style={styles.categoriesItemContainer}
                        
                        onPress={() => props.navigation.navigate('Detail',{
                            nom: item.nom, 
                            telephone: item.telephone,
                            photo_item: item.photo_item,
                            adresse: item.adresse,
                            ville: item.ville,
                            latitude: item.latitude,
                            longitude: item.longitude,
                            categorie:item.categorie,
                        })}>
                        <View style={{height:5,backgroundColor:'white'}}></View>  
                           
                        <View style={{flex:1,flexDirection:'row',
                            }}>
                            <Image
                                source={{ uri: item.photo_item}} 
                                style={styles.image}
                            />
                            <View>
                                <Text style={styles.nom}>{item.nom}</Text>
                                <Text style={styles.flatlistItem}>{item.categorie} de {item.ville}</Text>
                            </View>
                        </View>

                    </TouchableOpacity>
                    </ScrollView>
                )}
                ListEmptyComponent={()=>(
                    <View>
                        <Text style={{textAlign:'center',fontSize:16,color:'orange'}}>Element non trouvable</Text>
                    </View>
                )}
            />
         
      </View>
    );  
  }

  export default HomeScreen;    

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
