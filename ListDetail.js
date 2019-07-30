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
export default class ListDetail extends Component<Props>{
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

        var response = info.user

        var my = [];
        {response.images.map((message) =>
            my.push(message.image)

        )
        }
        this.setState({mys:my})


        this.setState({cards :response})



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
    _handlePressSignup = () => {
        this.props.navigation.navigate('Timing')
    }

    componentDidMount() {
        var self=this;
        var url = "";

        url = GLOBAL.baseUrl + 'escort/profile.php';

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
            <TouchableOpacity onPress={() =>  this.props.navigation.navigate('Escorts')}>
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
                <KeyboardAwareScrollView>
                <Carousel
                    autoplay
                    autoplayTimeout={5000}
                    loop
                    index={0}
                    pageSize={BannerWidth}>
                    {this.state.mys.map((image, index) => this.renderPage(image, index))}
                </Carousel>

                 <View >
                     <View style = {{flexDirection :'row',marginLeft:10,marginTop : 20}}>
                         <View style = {{width :'50%',flexDirection :'row'}}>
                         <Text style = {{color :'black', fontSize:14}}>
                             FIRSTNAME :
                         </Text>
                         <Text style = {{color :'grey', fontSize:14}}>
                             {this.state.cards.firstname}
                         </Text>
                         </View>

                         <View style = {{width :'50%',flexDirection :'row'}}>
                             <Text style = {{color :'black', fontSize:14}}>
                                LASTNAME :
                             </Text>
                             <Text style = {{color :'grey', fontSize:14}}>
                                 {this.state.cards.lastname}
                             </Text>
                         </View>

                     </View>



                     <View style = {{flexDirection :'row',marginLeft:10,marginTop : 20}}>
                         <View style = {{width :'50%',flexDirection :'row'}}>
                             <Text style = {{color :'black', fontSize:14}}>
                                 CATEGORY :
                             </Text>
                             <Text style = {{color :'grey', fontSize:14}}>
                                 {this.state.cards.category}
                             </Text>
                         </View>

                         <View style = {{width :'50%',flexDirection :'row'}}>
                             <Text style = {{color :'black', fontSize:14}}>
                                 SEXUALITY :
                             </Text>
                             <Text style = {{color :'grey', fontSize:14}}>
                                 {this.state.cards.sexuality}
                             </Text>
                         </View>

                     </View>

                         <View style = {{flexDirection :'row',marginLeft:10,marginTop : 20}}>
                             <View style = {{width :'50%',flexDirection :'row'}}>
                                 <Text style = {{color :'black', fontSize:14}}>
                                     AGE :
                                 </Text>
                                 <Text style = {{color :'grey', fontSize:14}}>
                                     {this.state.cards.age}
                                 </Text>
                             </View>

                             <View style = {{width :'50%',flexDirection :'row'}}>
                                 <Text style = {{color :'black', fontSize:14}}>
                                     PUBLIC HAIR :
                                 </Text>
                                 <Text style = {{color :'grey', fontSize:14}}>
                                     {this.state.cards.public_hair}
                                 </Text>
                             </View>

                         </View>

                     <View style = {{width :'100%',flexDirection :'row',marginLeft:10,marginTop:20}}>
                         <Text style = {{color :'black', fontSize:14}}>
                             LANGUAGE KNOWN :
                         </Text>
                         <Text style = {{color :'grey', fontSize:14}}>
                             {this.state.cards.languages}
                         </Text>
                     </View>

                     <View style = {{width :'100%',flexDirection :'row',marginLeft:10,marginTop:20}}>
                         <Text style = {{color :'black', fontSize:14}}>
                             SERVICES :
                         </Text>
                         <Text style = {{color :'grey', fontSize:14}}>
                             {this.state.cards.services}
                         </Text>
                     </View>

                     <View style = {{width :'100%',flexDirection :'row',marginLeft:10,marginTop:20}}>
                         <Text style = {{color :'black', fontSize:14}}>
                             INTEREST :
                         </Text>
                         <Text style = {{color :'grey', fontSize:14}}>
                             {this.state.cards.interests}
                         </Text>
                     </View>



                     <View style = {{flexDirection :'row',marginLeft:10,marginTop : 20}}>
                         <View style = {{width :'50%',flexDirection :'row'}}>
                             <Text style = {{color :'black', fontSize:14}}>
                                 OCCUPATION :
                             </Text>
                             <Text style = {{color :'grey', fontSize:14}}>
                                 {this.state.cards.occupation}
                             </Text>
                         </View>

                         <View style = {{width :'50%',flexDirection :'row'}}>
                             <Text style = {{color :'black', fontSize:14}}>
                                 DRESS STYLE :
                             </Text>
                             <Text style = {{color :'grey', fontSize:14}}>
                                 {this.state.cards.dress_style}
                             </Text>
                         </View>

                     </View>
                     <View style = {{flexDirection :'row',marginLeft:10,marginTop : 20}}>
                         <View style = {{width :'50%',flexDirection :'row'}}>
                             <Text style = {{color :'black', fontSize:14}}>
                                 FOOD :
                             </Text>
                             <Text style = {{color :'grey', fontSize:14}}>
                                 {this.state.cards.food}
                             </Text>
                         </View>

                         <View style = {{width :'50%',flexDirection :'row'}}>
                             <Text style = {{color :'black', fontSize:14}}>
                                DRINK :
                             </Text>
                             <Text style = {{color :'grey', fontSize:14}}>
                                 {this.state.cards.drinks}
                             </Text>
                         </View>

                     </View>

                     <Button
                         style={{ marginTop :20,padding:8,height:40, backgroundColor:'black',color: 'white',width :150,alignSelf:'center'}}
                         onPress={() => this._handlePressSignup()}
                         title="BOOK NOW"
                     >BOOK NOW </Button>

                 </View>




                </KeyboardAwareScrollView>


            </SafeAreaView>
        );
    }
}