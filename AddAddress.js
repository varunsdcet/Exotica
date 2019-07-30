import React, {Component} from 'react';
import {Platform,ActivityIndicator, StyleSheet,AsyncStorage,SafeAreaView, Text, View ,NetInfo ,Image,ScrollView,TouchableOpacity ,Alert,Container ,TextInput , Dimensions} from 'react-native';
import Button from 'react-native-button'
import { DrawerActions } from 'react-navigation';
import { TextField } from 'react-native-material-textfield';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'
import styles from "./Style";
const axios = require('axios');
const GLOBAL = require('./Global');

type Props = {};
const windowW= Dimensions.get('window').width
const windowH = Dimensions.get('window').height

export default class AddAddress extends Component<Props> {

    state = {
        fname: '',
        lname:'',
        email:'',
        pass:'',
        country:'',
        mobile:'',
        loading :false,
    };


    componentDidMount() {
        this.props.navigation.addListener('willFocus',this._handleStateChange);
    }

    myCallbackFunction = () => {

        this.setState({loading: false})
        this.props.navigation.goBack()
    }
    _handleStateChange = state => {

        this.setState({fname :GLOBAL.location})
        var that =this;
        //Checking for the permission just after component loaded
        if(Platform.OS === 'ios'){

        }else{

        }
    };
    _handlePressSignup() {

        this.showLoading()
        var self=this;
        var url = "";

            url = GLOBAL.baseUrl + 'client/save-address.php';


        axios.post(url, {
            client_id:GLOBAL.userid,
            address_type:'',
            appartment:this.state.lname + this.state.email + this.state.pass,
            pincode: this.state.country,
            area:GLOBAL.location,
            latitude:GLOBAL.lat,
            longitude:GLOBAL.long,

        })
            .then(function (response) {
                alert(JSON.stringify(response))
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
                                <TouchableOpacity onPress={() =>  this.props.navigation.navigate('Location')}>
                                <TextField
                                    label='Select Area'
                                    value={fname}
                                    editable = {false}
                                    ed
                                    onChangeText={ (fname) => this.setState({ fname }) }
                                />
                                </TouchableOpacity>
                                <TextField
                                    label='Enter Apartment'
                                    value={lname}
                                    onChangeText={ (lname) => this.setState({ lname }) }
                                />
                                <TextField
                                    label='Enter Suite'
                                    value={email}
                                    onChangeText={ (email) => this.setState({ email }) }
                                />
                                <TextField
                                    label='Enter Sector'
                                    value={pass}

                                    onChangeText={ (pass) => this.setState({ pass }) }
                                />

                                <TextField
                                    label='Enter Pincode'
                                    value={country}
                                    onChangeText={ (country) => this.setState({ country }) }
                                />


                                <Button
                                    style={{ padding:8,height:40, backgroundColor:'black',color: 'white'}}
                                    onPress={() => this._handlePressSignup()}
                                    title="SIGN UP"
                                >ADD </Button>

                            </View>


                        </View>
                    </KeyboardAwareScrollView>
                </View>
            </SafeAreaView>
        );
    }
}