import React, { Component } from 'react';
import { StyleSheet,Image, Text, View, TextInput, Button, Alert, ActivityIndicator } from 'react-native';
import firebase from '../firebase/firebase';
//import firebase from '../firebase/auth';
import {StylesCss} from '../styles/StylesCss';


export default class RegisterScreen extends Component {
  
  constructor() {
    super();
    this.state = { 
      displayName: '',
      email: '', 
      password: '',
      isLoading: false,
      uid:''
    }
  }

   createUserInDb = (uid, displayName, email) => {
    return firebase.firestore().collection('users').doc(uid).add(
        {
            uid,
            displayName,
            email
        }
    )
}

  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  signup = async () => {
    
        try {
            const response = await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            if (response.user.uid) {
                const user = {
                    uid: response.user.uid,
                    email: email,
                    fullName:displayName ,
                }

                db.collection('userf')
                    .doc(response.user.uid)
                    .set(user)
            }
        } catch (e) {
            alert(e)
        }
    
}

  registerUser = () => {
    if(this.state.email === '' && this.state.password === '') {
      Alert.alert('Veiller completer tous les champs')
    } else {
      this.setState({
        isLoading: true,
      })
      firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((res) => {
        const uid = res.user;
        
        res.user.updateProfile({
          displayName: this.state.displayName
        })
        
        console.log('User registered successfully!')
        this.setState({
          isLoading: false,
          displayName: '',
          email: '', 
          password: '',
          uid:uid,
        })
        this.props.navigation.replace('Home');
       
      })
      .then( uid => createUserInDb(uid, displayName, email))
      .catch(error => this.setState({ errorMessage: error.message }))      
    }
  }

  render() {
    if(this.state.isLoading){
      return(
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E"/>
        </View>
      )
    }    
    return (
      <View style={StylesCss.container}>

      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <Text style={StylesCss.textlogo}>PlacePool</Text>
        <Image source={require('../images/marker.png')} style={StylesCss.marker} />
      </View>
      <View style={StylesCss.infoLogin}>
        <Text style={StylesCss.textConnexion}>INSCRIPTION</Text>

         <View style={StylesCss.input}>
          <TextInput
            style={{
              paddingHorizontal: 10,
              height: 30,
              width: '100%',
              color: 'white',
              fontSize:18,
            }}
            placeholder="FullName"
            placeholderTextColor="white"
            value={this.state.displayName}
            onChangeText={(val) => this.updateInputVal(val, 'displayName')}
          />
        </View> 

        <View style={StylesCss.input}>
          <TextInput
            style={{
              paddingHorizontal: 10,
              height: 30,
              width: '100%',
              color: 'white',
              fontSize:18,
            }}
            placeholder="Email"
            placeholderTextColor="white"
            value={this.state.email}
            onChangeText={(val) => this.updateInputVal(val, 'email')}
          />
        </View>

        <View style={StylesCss.input}>
          <TextInput
            secureTextEntry={true}
            style={{
              paddingHorizontal: 10,
              height: 30,
              width: '100%',
              color: 'white',
              fontSize:18,
            }}
            placeholder="Password"
            placeholderTextColor="white"
            value={this.state.password}
            onChangeText={(val) => this.updateInputVal(val, 'password')}
            maxLength={15}
            secureTextEntry={true}
          />
        </View>

        <View style={StylesCss.buttonContenair}>
          <View style={{ marginRight: 80 }}>
            <Button title="Login" color="grey" onPress={() => this.props.navigation.navigate('Login')}/>
          </View>

          <View>
            <Button title="Inscription" onPress={() => this.registerUser()}/>
          </View>
        </View>
      </View>
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  /* container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 35,
    backgroundColor: 'grey'
  },
  inputStyle: {
    width: '100%',
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: "center",
    borderColor: "#ccc",
    borderBottomWidth: 1
  },
  loginText: {
    color: '#3740FE',
    marginTop: 25,
    textAlign: 'center'
  }, */
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  }
});