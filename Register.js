import React, {Component} from 'react';
import {Platform,ActivityIndicator, StyleSheet,AsyncStorage,SafeAreaView, Text, View ,NetInfo ,Image,ScrollView,TouchableOpacity ,Alert,Container ,TextInput , Dimensions} from 'react-native';
import Button from 'react-native-button'
import { DrawerActions } from 'react-navigation';
import { TextField } from 'react-native-material-textfield';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'
import styles from "./Style";
const axios = require('axios');
const GLOBAL = require('./Global');
import ImagePicker from 'react-native-image-picker';
type Props = {};
const windowW= Dimensions.get('window').width
const windowH = Dimensions.get('window').height
const options = {
    title: 'Select Avatar',

    storageOptions: {
        skipBackup: true,
        loading :false,
        path: 'images',
        text :'',
        allowsEditing: true,
        avatarSource :'',
    },
    allowsEditing: true,
    maxWidth: 500, maxHeight: 500,
};
export default class App extends Component<Props> {

    state = {
        fname: '',
        lname:'',
        email:'',
        pass:'',
        country:'',
        mobile:'',
        loading :false,
    };


    componentWillMount() {
        alert(GLOBAL.user)
    }

    myCallbackFunction = () => {
        this.setState({loading: false})

        alert(GLOBAL.user)
        if (GLOBAL.user == "1"){
            alert('dd')
            this.props.navigation.navigate('Service')
        }else {

        }


    }
    changeImage=()=>{
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else {

                GLOBAL.profile = response.uri
                const source = {uri: response.uri};
                this.setState({
                    avatarSource: source,
                    imageget: 1
                });
            }
        })
        }
    _handlePressSignup() {

            this.showLoading()
            var self=this;
        var url = "";
            if (GLOBAL.user == "1"){
            url = GLOBAL.baseUrl + 'escort/signup.php';
            } else {
             url = GLOBAL.baseUrl + 'client/signup.php';
            }


            axios.post(url, {
                firstname:this.state.fname,
                lastname:this.state.lname,
                email:this.state.email,
                password: this.state.pass,
                mobile:this.state.mobile,
                country_code:this.state.country,
                agree:"1",
                device_modal:"1",
                manufacturer:"1",
                device_id:"1",
                device_token:"11111",
                device_type:Platform.OS,
                ip_address:"",
                device_country:"india",
                modal_name:"samsung"
            })
                .then(function (response) {

                    self.myCallbackFunction()



                    //    self.myCallbackFunction.bind()

                    //   this.myCallbackFunction()


                })
                .catch(function (error) {
                    console.log(error);
                    alert(JSON.stringify(error))
                    self.myCallbackFunction()

                });
        }

        // this.props.navigation.navigate('DrawerNavigator')



    showLoading() {
        this.setState({loading: true})
    }


    render() {
        let { fname,lname,email,pass,country,mobile } = this.state;
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
            <View style={{ flexDirection:'column'}}>
                <KeyboardAwareScrollView style ={{ height:'100%'}}>

                    <View style={{marginTop:3}}>


                        <View style={{marginLeft:10, marginRight:10,flexDirection:'column'}}>
                            <TextField
                                label='First Name'
                                value={fname}
                                onChangeText={ (fname) => this.setState({ fname }) }
                            />
                            <TextField
                                label='Last Name'
                                value={lname}
                                onChangeText={ (lname) => this.setState({ lname }) }
                            />
                            <TextField
                                label='Email'
                                value={email}
                                onChangeText={ (email) => this.setState({ email }) }
                            />
                            <TextField
                                label='Password'
                                value={pass}
                                secureTextEntry={true}
                                onChangeText={ (pass) => this.setState({ pass }) }
                            />

                            <TextField
                                label='Country Code'
                                value={country}
                                onChangeText={ (country) => this.setState({ country }) }
                            />
                            <TextField
                                label='Mobile'
                                value={mobile}
                                onChangeText={ (mobile) => this.setState({ mobile }) }
                            />
                            {GLOBAL.user == "1" && (
                                <View>
                            <Text style = {{color :'black',fontSize:20,margin:12}}>
                                Please Upload Valid Certificate
                            </Text>
                            <Button
                                style={{ width : 100,padding:8,height:40, backgroundColor:'black',color: 'white',marginBottom:12}}
                                onPress={() => this.changeImage()}
                                title="SIGN UP"
                            >Upload </Button>
                                </View>

)}

                            <Button
                                style={{ padding:8,height:40, backgroundColor:'black',color: 'white'}}
                                onPress={() => this._handlePressSignup()}
                                title="SIGN UP"
                            >Sign Up </Button>

                        </View>

                        <Text style={{fontSize:15, textAlign:'center', marginTop:10}}>Already have an account?</Text>

                        <TouchableOpacity onPress={() =>  this.props.navigation.goBack()}>
                            <Text style={{fontSize:15,marginTop:10, textAlign:'center'}}>Login here</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAwareScrollView>
            </View>
</SafeAreaView>
        );
    }
}