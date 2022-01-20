import React, {  Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image,Alert, ActivityIndicator } from 'react-native';
import firebase from '../firebase/firebase';
import auth from 'firebase/auth';
import {Auth} from './auth';
import {StylesCss} from '../styles/StylesCss';



export default class LoginScreen extends Component {
  
  constructor() {
    super();
    this.state = { 
      email: '', 
      password: '',
      isLoading: false
    }
  }

  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  userLogin = () => {
    if(this.state.email === '' && this.state.password === '') {
      //Alert.alert('veiller completer tous les champs')
      this.setState({ errorMessage: 'veiller completer tous les champs'})
    } else {
      this.setState({
        isLoading: true,
      })
      firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((res) => {
        console.log(res)
        console.log('User logged-in successfully!')
        this.setState({
          isLoading: false,
          email: '', 
          password: ''
        })
        this.props.navigation.replace('Home')
      })
      .catch(error => this.setState({ errorMessage: error.message }))
    }
  }

  render() {
    
    return (
      <View style={StylesCss.container}>

        <View style={{flexDirection:'row',justifyContent:'center'}}>  
            <Text style={StylesCss.textlogo}>PlacePool</Text>      
            <Image source={require('../images/marker.png')} style={StylesCss.marker} /> 
        </View>

        <View style={StylesCss.infoLogin}>
            <Text style={StylesCss.textConnexion}>CONNEXION</Text>

            {
              this.state.errorMessage ? <Text style={{fontSize:19,color:'orange',margin:10}}>{this.state.errorMessage}</Text>
                : null
            }

            <TextInput style={StylesCss.input}
                placeholder="Email" placeholderTextColor="white" 
                value={this.state.email}
                onChangeText={(val) => this.updateInputVal(val, 'email')}
                autoCapitalize="none"
            />

            <TextInput  style={StylesCss.input}
                placeholder="Password" placeholderTextColor="white"
                alue={this.state.password}
                onChangeText={(val) => this.updateInputVal(val, 'password')}
                maxLength={15}
                secureTextEntry={true}
            />
           
            <Text style={StylesCss.text}>Mot de passe oublier?</Text>
           
            <View style={StylesCss.buttonContenair} >
              <View style={{marginRight:80}}>
                <Button
                 title='Inscription' color="grey"
                 onPress={() => this.props.navigation.navigate('Register')}
                />
              </View>

              <View >
                <Button title='Login' onPress={() => this.userLogin()} />
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