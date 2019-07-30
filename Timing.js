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
export default class Timing extends Component<Props>{
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

    componentDidMount() {
        var self=this;
        var url = "";

        url = GLOBAL.baseUrl + 'escort/escort_serviceTimes.php';

        alert(url)

        axios.post(url, {
            id:'66'

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
            <TouchableOpacity onPress={() =>  this.props.navigation.navigate('AddressList')}>
                <View style = {{height :40,backgroundColor:'white',flexDirection:'row' ,width:'100%',justifyContent:'space-between'}}>

                    <Text style = {{color :'black', fontSize:12, marginTop:12,marginLeft: 2, width :'60%'}}>
                        {itemData.item.service_name}
                    </Text>

                    <Text style = {{color :'black', fontSize:12, marginTop:12,marginLeft: 2 ,marginRight: 12,width:'20%'}}>
                    EUR  {itemData.item.price}
                    </Text>


                    <Image style={{width:20, height:20, marginTop: 10, resizeMode:'contain',marginRight:10  }}
                           source ={require('./arrow.png')}/>
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
                    <FlatList style={{backgroundColor:'#f2f2f2', marginTop:2, marginLeft:5, marginRight:5}}
                              data={this.state.cards}

                              keyExtractor={this._keyExtractor}
                              renderItem={this.renderRowItem}
                    />



                </KeyboardAwareScrollView>


            </SafeAreaView>
        );
    }
}