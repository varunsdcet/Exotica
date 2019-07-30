import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
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
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import Button from 'react-native-button';

import Swiper from 'react-native-deck-swiper';
import { DrawerActions } from 'react-navigation';
import Geocoder from 'react-native-geocoder';
import Geolocation from '@react-native-community/geolocation';
const GLOBAL = require('./Global');
import StarRatingBar from 'react-native-star-rating-view/StarRatingBar';

import Carousel from 'react-native-banner-carousel';
const windowW= Dimensions.get('window').width
const windowH = Dimensions.get('window').height
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
type props={};
const { width, height } = Dimensions.get('window');
const equalWidth =  (width / 2 )
const BannerWidth =  width ;
const BannerHeight = 220;
const equalHeight =  (height -190)
export default class EscortHome extends Component<Props>{
    state = {
        fname: '',
        location :'Select Location',
        loading :false,
        category :[],
        banner :[],
        mys :[],
        currentLongitude: 'unknown',//Initial Longitude
        currentLatitude: 'unknown',//Initial Latitude
        cards: [],
        swipedAllCards: false,
        swipeDirection: '',
        cardIndex: 0
    };

    onPressFemale(){
        //   this.props.navigation.navigate('Duration')
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

    _handleStateChange = state => {

        this.setState({location :GLOBAL.location})
        var that =this;
        //Checking for the permission just after component loaded
        if(Platform.OS === 'ios'){

        }else{

        }
    };
    myCallbackFunction = (info) => {
        alert(JSON.stringify(info))




        this.setState({cards :info})



        // alert(JSON.stringify(info))
    }
    renderCard = (card, index) => {
        alert(JSON.stringify(card))



        return (
            <View style={styles.card}>
                <Text style={styles.text}> {this.state.cards[index]}</Text>
            </View>
        )
    };

    onSwiped = (type) => {
        console.log(`on swiped ${type}`)
    }
    _handlePressSignup = () => {
        this.props.navigation.navigate('AddAddress')
    }

    onSwipedAllCards = () => {
        this.setState({
            swipedAllCards: true
        })
    };

    swipeLeft = () => {
        this.swiper.swipeLeft()
    };
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
    _handlePressLogin = () =>{
        this.props.navigation.navigate('Chat')

    }
    componentDidMount() {
        var self=this;
        var url = "";

        url = GLOBAL.baseUrl + 'client/client_addressList.php';

        alert(url)

        axios.post(url, {
            client_id:GLOBAL.userid

        })
            .then(function (response) {

                self.myCallbackFunction(response.data)




            })
            .catch(function (error) {
                console.log(error);

                alert(error)

            });


        this.props.navigation.addListener('willFocus',this._handleStateChange);
    }
    renderRowItem = (itemData) => {
        return (
            <TouchableOpacity onPress={() =>  this.props.navigation.navigate('Escorts')}>
                <View style = {{backgroundColor:'white',flexDirection:'column' ,width:'100%'}}>

                    <Text style = {{color :'black', fontSize:12, marginTop:12,marginLeft: 2, width :'60%'}}>
                        Apartment  :    {itemData.item.appartment}
                    </Text>

                    <Text style = {{color :'black', fontSize:12, marginTop:12,marginLeft: 2 ,marginRight: 12,width:'100%',marginBottom:6}}>
                        Location  :    {itemData.item.location}
                    </Text>



                </View>

                <View style = {{width :windowW,height:1,backgroundColor:'#efefef'}}>
                </View>

            </TouchableOpacity>
        )
    }
    render(){









        return(

            <SafeAreaView>
                <KeyboardAwareScrollView>
                  <View style = {{borderRadius:20,borderWidth: 1,width :windowW -20,height :windowH - 200,margin:10,

                      elevation:4,
                      shadowOffset: { width: 5, height: 5 },
                      shadowColor: "grey",
                      shadowOpacity: 0.5,
                      shadowRadius: 10,flexDirection:'column'}}>

                      <Image style={{width:80, height:80,resizeMode:'contain',margin:12,alignSelf:'center'}}
                             source={require('./user.png')}
                      />

                      <Text style = {{color :'black', fontSize:12, marginTop:12,marginLeft: 2, alignSelf:'center'}}>
                          New Booking Available
                      </Text>

                      <Text style = {{color :'black', fontSize:12, marginTop:12,marginLeft: 2, alignSelf:'center'}}>
                        Name - Varun
                      </Text>



                      <Text style = {{color :'black', fontSize:12, marginTop:12,marginLeft: 2, alignSelf:'center'}}>
                          Booking timing  - 10.20 Am
                      </Text>

                      <Button
                          style={{width:'80%', height:40, backgroundColor:'black',color: 'white',padding :8 ,margin:10 ,marginTop:30,alignSelf:'center' }}
                          onPress={() => this._handlePressLogin()}
                          title="LOG IN"
                      >
                         ACCEPT</Button>

                      <Button
                          style={{width:'80%', height:40, backgroundColor:'grey',color: 'white',padding :8 ,margin:10 ,alignSelf:'center' }}
                          onPress={() => this._handlePressLogin()}
                          title="LOG IN"
                      >
                          REJECT</Button>


                  </View>

                </KeyboardAwareScrollView>


            </SafeAreaView>
        );
    }
}