import React, {Component} from 'react';
import {Platform,ActivityIndicator, StyleSheet,AsyncStorage,SafeAreaView,Text, View ,NetInfo ,ScrollView,Image,TouchableOpacity ,Alert,Container ,TextInput , Dimensions} from 'react-native';

import Button from 'react-native-button'
import styles from './Style.js'
import { DrawerActions } from 'react-navigation';
import { TextField } from 'react-native-material-textfield';
const GLOBAL = require('./Global');
const axios = require('axios');
type Props = {};
const window= Dimensions.get('window').width
const height = Dimensions.get('window').height





export default class Login extends Component<Props> {
    state = {
        phone: '',
        password:'',
        loading :false,
    };

    myCallbackFunction = (res) => {
        if (res.error == false){
            GLOBAL.userid  = res.id
            this.props.navigation.navigate('Home')
        }

        this.setState({loading: false})
    }

    componentWillMount(){
        alert(GLOBAL.user)
    }

    _handlePressLogin() {
        if (this.state.phone == ''){
            alert('Please enter Email Address')

        } else if (this.state.password == ''){
            alert('Please enter Password')
        } else{
            this.showLoading()
            var self=this;

            var url = "";
                if ( GLOBAL.user == "1"){
                url = GLOBAL.baseUrl + 'escort/login.php';
            } else {
                url = GLOBAL.baseUrl + 'client/login.php';
            }

         alert(url)

            axios.post(url, {
                userid: this.state.phone,
                password: this.state.password,
                device_id: '122222222',
                device_type: Platform.OS,
            })
                .then(function (response) {

                    self.myCallbackFunction(response.data)


                //    self.myCallbackFunction.bind()

                    //   this.myCallbackFunction()


                })
                .catch(function (error) {
                    console.log(error);
                  //  self.myCallbackFunction()

                });
        }

       // this.props.navigation.navigate('DrawerNavigator')
    }


    showLoading() {
        this.setState({loading: true})
    }

    _hideLoading() {
        alert('hi')

        this.setState({loading: false})
    }

    _noAccount(){
      //  this.props.navigation.navigate('Register')
    }

    render() {
        let { phone,password } = this.state;
        if(this.state.loading){
            return(
                <View style={styles.container}>
                    <ActivityIndicator style = {styles.loading}
                                       size="large" color='black' />
                </View>
            )
        }
        return (
            <SafeAreaView>
            <View style={{flexDirection:'column', }}>
                <ScrollView style ={{width :'100%', height:'100%'}}>

                    <View style={{marginTop:10}}>

                        <View style={{margin: 20,marginTop: 3}}>
                            <TextField
                                label='Email Address'
                                value={phone}
                                onChangeText={ (phone) => this.setState({ phone }) }
                            />
                            <TextField
                                label='Password'
                                value={password}
                                secureTextEntry={true}
                                onChangeText={ (password) => this.setState({ password }) }
                            />
                        </View>
                        <Button
                            style={{width:window-20, height:40, backgroundColor:'black',color: 'white',padding :8 ,margin:10  }}
                            onPress={() => this._handlePressLogin()}
                            title="LOG IN"
                        >
                            LOG IN</Button>

                        <TouchableOpacity>
                            <Text style={styles.container2}>Forgot Password?</Text>
                        </TouchableOpacity>

                        <TouchableOpacity  onPress={()=>this._noAccount('Register')}>
                            <Text style={styles.container2}>Dont have an account?</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
            </SafeAreaView>
        );
    }
}
