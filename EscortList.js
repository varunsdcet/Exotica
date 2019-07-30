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
    Button,
    Platform
} from 'react-native';
import styles from './Style.js'
const axios = require('axios');
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
export default class EscortList extends Component<Props>{
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

            url = GLOBAL.baseUrl + 'escort/fetch_list.php';

alert(url)

        axios.post(url, {
            category_id:'32',
            latitude:'28.641529',
            longitude:'77.120918',

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
            <TouchableOpacity onPress={() =>  this.props.navigation.navigate('ListDetail')}>
                <View style = {{backgroundColor:'white',flexDirection:'row' ,width:'100%'}}>
                    <Image style={{height :50,width :'20%', resizeMode:'contain',margin:10}}
                           source={{ uri: itemData.item.image }} />

                           <View style = {{flexDirection :'column',width :'60%'}}>

                    <Text style = {{color :'black', fontSize:20, marginTop:8,marginLeft: 2}}>
                        {itemData.item.firstname}
                    </Text>

                               <Text style = {{color :'grey', fontSize:12, marginTop:8,marginLeft: 2}}>
                                   {itemData.item.distance} miles
                               </Text>
                           </View>
                    <Image style={{width:'20%', height:20, marginTop: 25, resizeMode:'contain',marginRight:10  }}
                           source ={require('./arrow.png')}/>
                </View>
                <View style = {{backgroundColor:'white',width:'100%'}}>
                    <View style = {{marginLeft:100 ,marginBottom:8}}>
                <StarRatingBar
                    style = {{marginLeft :100}}
                    score={itemData.item.rating}
                    dontShowScore={true} // true: not show the score text view
                    allowsHalfStars={true}
                    accurateHalfStars={true}
                />
                    </View>
                </View>
                <View style = {{width :windowW,height:1,backgroundColor:'#efefef'}}>
                </View>

            </TouchableOpacity>
        )
    }
    render(){









        return(

            <SafeAreaView>
                <FlatList style={{backgroundColor:'#f2f2f2', marginTop:2, marginLeft:5, marginRight:5}}
                          data={this.state.cards}

                          keyExtractor={this._keyExtractor}
                          renderItem={this.renderRowItem}
                />


            </SafeAreaView>
        );
    }
}