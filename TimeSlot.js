import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    FlatList,
    TouchableOpacity,
    SafeAreaView,
    AsyncStorage,
    ScrollView,
    Dimensions,
    Platform
} from 'react-native';
import styles from './Style.js'
const axios = require('axios');
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'
import { DrawerActions } from 'react-navigation';
import Geocoder from 'react-native-geocoder';
import Geolocation from '@react-native-community/geolocation';
const GLOBAL = require('./Global');
import Carousel from 'react-native-banner-carousel';
const windowW= Dimensions.get('window').width
const windowH = Dimensions.get('window').height
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {TextField} from "react-native-material-textfield";
import Button from "react-native-button";
type props={};
const { width, height } = Dimensions.get('window');
const equalWidth =  (width / 2 )
const BannerWidth =  width ;
const BannerHeight = 220;
const equalHeight =  (height -190)
export default class TimeSlot extends Component<Props>{
    state = {
        fname: '',
        location :'Select Location',
        loading :false,
        category :["Sex","Massage","Anal","BDSM","GangBang","Couple","Threesoine","Fetish","Ceathes Fetish"],
        banner :[],
        mys :[],
        phone:'',
        currentLongitude: 'unknown',//Initial Longitude
        currentLatitude: 'unknown',//Initial Latitude
    };

    onPressFemale(){
        //   this.props.navigation.navigate('Duration')
    }
    _handleStateChange = state => {

        this.setState({location :GLOBAL.location})
        var that =this;
        //Checking for the permission just after component loaded
        if(Platform.OS === 'ios'){

        }else{

        }
    };
    myCallbackFunction = (info) => {
        GLOBAL.long = info.coords.longitude
        GLOBAL.lat = info.coords.latitude
        // alert(JSON.stringify(info))
    }
    renderPage(image, index) {
        return (

            <View style={styles.carousel}
                  key={index}>
                <TouchableOpacity onPress ={()=> this.getProductDetails(index)}>
                    <Image style={styles.carousel}

                           source={{ uri: image }}/>
                </TouchableOpacity>
            </View>
        );
    }
    responseCall = (response) => {

        alert(JSON.stringify(response))
        var my = [];
        {response.banner.map((message) =>
            my.push(message.banner_image)

        )
        }
        //this.setState({mys:my})
        // this.setState({category :response.categories})


    }
    componentDidMount() {
        // var url = GLOBAL.baseUrl + 'categories.php';
        // var self=this;
        //
        // axios.get(url)
        //     .then(function (response) {
        //         console.log(response);
        //         self.responseCall(response.data)
        //
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });
        //
        // var self=this;
        // Geolocation.getCurrentPosition(info =>
        //
        //     self.myCallbackFunction(info)
        //
        //
        //
        // );



        //this.props.navigation.addListener('willFocus',this._handleStateChange);
    }
    renderRowItem = (itemData) => {
        let { phone } = this.state;
        return (
            <View>

                <Text style = {{color :'black', fontSize:20, marginTop:12, marginLeft:10,marginBottom:12}}>
                    {itemData.item}
                </Text>
                <View>
                    <TextField style = {{marginLeft:10,width: 200}}
                               label='Please Enter'
                               value={phone}
                               onChangeText={ (phone) => this.setState({ phone }) }
                    />
                </View>

            </View>



        )
    }
    _handlePressSignup = () =>{
        //  this.props.navigation.navigate('EscortHome')
        this.props.navigation.navigate('EscortProfile')
    }

    render(){

        return(

            <SafeAreaView>


                <KeyboardAwareScrollView>
                    <View style = {{width:'100%',flexDirection :'row',justifyContent:'space-between',height:60,borderBottomWidth:1,borderBottomColor:'black'}}>
                        <Text style = {{color :'black', fontSize:18,margin :12,marginTop:17 ,width :'30%'}}>
                            Sex
                        </Text>

                        <TextInput
                            style={{width :'50%',marginRight:12 ,borderWidth:1,borderColor:'grey',height:30,marginTop:15}}


                            placeholder='  Enter Sex'
                        />





                    </View>

                    <View style = {{width:'100%',flexDirection :'row',justifyContent:'space-between',height:60,borderBottomWidth:1,borderBottomColor:'black'}}>
                        <Text style = {{color :'black', fontSize:18,margin :12,marginTop:17 ,width :'30%'}}>
                            Massage
                        </Text>

                        <TextInput
                            style={{width :'50%',marginRight:12 ,borderWidth:1,borderColor:'grey',height:30,marginTop:15}}


                            placeholder='  Enter '
                        />





                    </View>

                    <View style = {{width:'100%',flexDirection :'row',justifyContent:'space-between',height:60,borderBottomWidth:1,borderBottomColor:'black'}}>
                        <Text style = {{color :'black', fontSize:18,margin :12,marginTop:17 ,width :'30%'}}>
                            Anal
                        </Text>

                        <TextInput
                            style={{width :'50%',marginRight:12 ,borderWidth:1,borderColor:'grey',height:30,marginTop:15}}


                            placeholder='  Enter '
                        />





                    </View>

                    <View style = {{width:'100%',flexDirection :'row',justifyContent:'space-between',height:60,borderBottomWidth:1,borderBottomColor:'black'}}>
                        <Text style = {{color :'black', fontSize:18,margin :12,marginTop:17 ,width :'30%'}}>
                            BDSM
                        </Text>

                        <TextInput
                            style={{width :'50%',marginRight:12 ,borderWidth:1,borderColor:'grey',height:30,marginTop:15}}


                            placeholder='  Enter '
                        />





                    </View>


                    <View style = {{width:'100%',flexDirection :'row',justifyContent:'space-between',height:60,borderBottomWidth:1,borderBottomColor:'black'}}>
                        <Text style = {{color :'black', fontSize:18,margin :12,marginTop:17 ,width :'30%'}}>
                            GangBang
                        </Text>

                        <TextInput
                            style={{width :'50%',marginRight:12 ,borderWidth:1,borderColor:'grey',height:30,marginTop:15}}


                            placeholder='  Enter '
                        />





                    </View>


                    <View style = {{width:'100%',flexDirection :'row',justifyContent:'space-between',height:60,borderBottomWidth:1,borderBottomColor:'black'}}>
                        <Text style = {{color :'black', fontSize:18,margin :12,marginTop:17 ,width :'30%'}}>
                            Couple
                        </Text>

                        <TextInput
                            style={{width :'50%',marginRight:12 ,borderWidth:1,borderColor:'grey',height:30,marginTop:15}}


                            placeholder='  Enter '
                        />





                    </View>

                    <View style = {{width:'100%',flexDirection :'row',justifyContent:'space-between',height:60,borderBottomWidth:1,borderBottomColor:'black'}}>
                        <Text style = {{color :'black', fontSize:18,margin :12,marginTop:17 ,width :'30%'}}>
                            Threesoine
                        </Text>

                        <TextInput
                            style={{width :'50%',marginRight:12 ,borderWidth:1,borderColor:'grey',height:30,marginTop:15}}


                            placeholder='  Enter '
                        />





                    </View>


                    <View style = {{width:'100%',flexDirection :'row',justifyContent:'space-between',height:60,borderBottomWidth:1,borderBottomColor:'black'}}>
                        <Text style = {{color :'black', fontSize:18,margin :12,marginTop:17 ,width :'30%'}}>
                            Fetish
                        </Text>

                        <TextInput
                            style={{width :'50%',marginRight:12 ,borderWidth:1,borderColor:'grey',height:30,marginTop:15}}


                            placeholder='  Enter '
                        />





                    </View>

                    <View style = {{width:'100%',flexDirection :'row',justifyContent:'space-between',height:60,borderBottomWidth:1,borderBottomColor:'black'}}>
                        <Text style = {{color :'black', fontSize:18,margin :12,marginTop:17 ,width :'35%'}}>
                            Ceathes Fetish
                        </Text>

                        <TextInput
                            style={{width :'50%',marginRight:12 ,borderWidth:1,borderColor:'grey',height:30,marginTop:15}}


                            placeholder='  Enter '
                        />





                    </View>

                    <Text style = {{color :'black', fontSize:18,margin :12,marginTop:17 ,width :'100%'}}>
                        Free Services
                    </Text>

                    <TextInput
                        style={{width :'90%',marginLeft:'5%' ,borderWidth:1,borderColor:'grey',height:30,marginTop:15,marginBottom: 12}}


                        placeholder='  Enter  Your Services'
                    />
                    <Button
                        style={{ margin:10,padding:8,height:40, backgroundColor:'black',color: 'white'}}
                        onPress={() => this._handlePressSignup()}
                        title="SIGN UP"
                    >SUBMIT </Button>
                    <View style = {{height:100}}>
                    </View>


                </KeyboardAwareScrollView>




            </SafeAreaView>
        );
    }
}