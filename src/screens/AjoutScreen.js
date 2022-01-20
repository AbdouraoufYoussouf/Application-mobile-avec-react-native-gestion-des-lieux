import React,{ useState,useEffect } from 'react';
import { Text, View, Image, TextInput, Button, ScrollView, ActivityIndicator, TouchableOpacity,Alert } from 'react-native';
import { Picker } from '@react-native-community/picker';
//import ImagePicker from 'react-native-image-crop-picker';
import * as Location from 'expo-location';
import {StylesCss} from '../styles/StylesCss';
import * as ImagePicker from 'expo-image-picker';
import firebase from '../firebase/auth';

function AjoutScreen(props) {

    const [image, setImage] = useState(null);
    const [selectedValue, setSelectedValue] = useState("");
    const [transfered, setTransfered] = useState(0);
    const [uploading, setUploading] = useState(false);

    const [vide , setvide] = useState(false);
    const [nom, setnom] = useState('');
    const [ville, setville] = useState('');
    const [adresse, setadresse] = useState('');
    const [telephone, settelephone] = useState(0);
    const [photo_item, setphoto_item] = useState('');
    const [categorie, setCategorie] = useState('');
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);

    const [location, setLocation] = useState(null);
    const [positionGet, setPositionGet] = useState(false);
    const [errorMsg, setErrorMsg] = useState(null);

    {console.log(categorie)}

/////////////   fonction register to firebase  ////////////////

    const saveNewLieu = async () => {
        if(nom === '' || adresse === '' || ville === ''||  location===''|| categorie==='' ){
            setvide(true)
        }else{
            try{await firebase.db.collection('Lieu').doc(categorie).collection(categorie).add({
                nom,adresse,telephone,ville,photo_item, categorie,latitude,longitude,
                  })
            Alert.alert('Informations du nouveau lieu bien Enregistrées')
            props.navigation.navigate("Home")
            setImage(null)
            setnom('')
            setville('')
            setadresse('')
            settelephone('')
            setphoto_item('')
            categorie('')
            setLatitude('')
            setLongitude('')
            setLocation('')
          
            }catch(error){
                console.log(error)
            }
        }
    }
     ///////////////////////  obtention des coordonner gps de votre position ##########################

  const getPosition = async () => {
    setPositionGet(true)
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
    setPositionGet(false)
    if (errorMsg) {
      setTest (errorMsg);
    } else if (location) {
     //setTest (JSON.stringify(location));
     setLatitude(location.coords.latitude)
     setLongitude(location.coords.longitude)
  console.log(latitude)
    }
  }

   //                     USEEFFECT

    
   useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

             ///////// Choisis une image

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      //aspect:[2,1],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
     /////  upload image to firebase storage and recuper le lien du fichier
             // au moment du chois de l'image

     const image = result.uri;
     
     setTransfered(0);
     
      const path = `${selectedValue}/${nom + '_' + ville + '_' + Date.now()}.jpg`
      return new Promise(async (res, rej) => {
        const response = await fetch(image)
        const file = await response.blob()
        setUploading(true);
        const upload = firebase.storage.ref(path).put(file);
        
        upload.on('state_changed', function(snapshot){
           
         var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
           setTransfered(
            Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          
        }, function(error) {
          setvideImage(true)
          
        }, function() {
          upload.snapshot.ref.getDownloadURL().then(function(downloadURL) {
           setUploading(false);
            setphoto_item(downloadURL)
        });
      });
    })

  };
    
    return(
        <View style={StylesCss.ajoutContainer}>
            <ScrollView >
            <Text style={StylesCss.nom}>Ajouter un lieu</Text>

            {
              vide && (<Text style={{alignSelf:'center',fontSize:20,marginBottom:10,color:'orange',}}>Veillez remplir tous les champs!</Text>)
            }
        
            <TextInput
                style={StylesCss.inputAjout}
                placeholder="Nom"
                placeholderTextColor="grey"
                onChangeText={text => setnom(text)}
                //autoFocus={true}
                value={nom}
            />
        
            <TextInput
                style={StylesCss.inputAjout}
                placeholder="Ville"
                placeholderTextColor="grey"
                onChangeText={text => setville(text)}
                value={ville}
            />

            <TextInput
                style={StylesCss.inputAjout}
                placeholder="Adresse"
                placeholderTextColor="grey"
                
                onChangeText={text => setadresse(text)}
                value={adresse}
            />
        
            <TextInput
                style={StylesCss.inputAjout}
                placeholder="Telephone" keyboardType='numeric'
                placeholderTextColor="grey"
                onChangeText={text => settelephone(text)}
                value={telephone}
            />
           
            <View style={StylesCss.inputPicker}>
              <Picker
                  selectedValue={categorie}
                  onValueChange={(itemValue, itemIndex) => setCategorie(itemValue)}

                  style={{ height: 50, width: '95%' ,paddingVertical:-10,alignSelf:'center',fontSize:20}}>
                  <Picker.Item label="Choisis une categorie" value="disabled" color="#bbb"  />
                  <Picker.Item label="Agence" value="agence" />
                  <Picker.Item label="Assurence" value="assurence" />
                  <Picker.Item label="Banque" value="banque" />
                  <Picker.Item label="Boutique" value="boutique" />
                  <Picker.Item label="Cafe" value="cafe" />
                  <Picker.Item label="Ecole" value="ecole" />
                  <Picker.Item label="Hotel" value="hotel" />
                  <Picker.Item label="Medcin" value="Medcin" />
                  <Picker.Item label="pharmatie" value="pharmatie" />
                  <Picker.Item label="Police" value="police" />
                  <Picker.Item label="Restaurant" value="restaurant" />
                  <Picker.Item label="Snack" value="snack" />
              </Picker>
            </View>

           

            <View style={StylesCss.choseImage}>
                <TouchableOpacity
                    onPress={pickImage} style={{flexDirection:'row',justifyContent:'space-between'}} >
                    {
                        !uploading ?  <Text style={{color:'grey',fontSize:20}}>Choisis une image</Text>
                        : <ActivityIndicator size="large" color="#000" style={{bottom:10,}} /> 
                    }
                    <Image source={{ uri: image }}  style={{ width: 120, height: 48 ,borderRadius:23,bottom:10}} />
                </TouchableOpacity>
            </View>
            
            <View style={StylesCss.inputPosi}>
              {
                  !location ? <Text style={StylesCss.inputViewPosi}>Ajouter votre position</Text>
                  : <Text style={{fontSize:16,color:'white'}}>Lat: {latitude},Long: {longitude} </Text>
              }
              
              {
                !positionGet ?    
                  <TouchableOpacity onPress={getPosition}>
                    <Image style={{ height: 69,width:66,alignSelf:'center',borderRadius:50}} source={require('../images/gps2.jpg')} />
                  </TouchableOpacity>
                : <ActivityIndicator size="large" color="#fff" style={{bottom:0,}} /> 
              }
            </View>

            <View style={{width:'80%',alignSelf:'center',marginVertical:25}}>
               <Button  onPress={saveNewLieu} title="Enregister"  />
            </View>

            </ScrollView>
        </View>
    )
}

export default AjoutScreen;