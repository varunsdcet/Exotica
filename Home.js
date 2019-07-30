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
import { DrawerActions } from 'react-navigation';
import Geocoder from 'react-native-geocoder';
import Geolocation from '@react-native-community/geolocation';
const GLOBAL = require('./Global');
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
export default class Home extends Component<Props>{
    state = {
        fname: '',
        location :'Select Location',
        loading :false,
        category :[],
        banner :[],
        mys :[],
        currentLongitude: 'unknown',//Initial Longitude
        currentLatitude: 'unknown',//Initial Latitude
    };
    static navigationOptions = {
        header : null
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
        this.setState({mys:my})
  this.setState({category :response.categories})


    }
    componentDidMount() {
        var url = GLOBAL.baseUrl + 'categories.php';
        var self=this;

        axios.get(url)
            .then(function (response) {
                console.log(response);
                self.responseCall(response.data)

            })
            .catch(function (error) {
                console.log(error);
            });

        var self=this;
        Geolocation.getCurrentPosition(info =>

            self.myCallbackFunction(info)



        );



        this.props.navigation.addListener('willFocus',this._handleStateChange);
    }
    renderRowItem = (itemData) => {
        return (
            <TouchableOpacity onPress={() =>  this.props.navigation.navigate('EscortList')}>
                <View style = {{backgroundColor:'white',flexDirection:'row', justifyContent:'space-between'}}>
                    <Image style={{height :50,width :50, resizeMode:'contain',margin:10}}
                           source={{ uri: itemData.item.image }} />

                    <Text style = {{color :'black', fontSize:20, marginTop:25, marginRight:windowW/2-40}}>
                        {itemData.item.name}
                    </Text>

                    <Image style={{width:20, height:20, marginTop: 25, resizeMode:'contain',marginRight:10  }}
                           source ={require('./arrow.png')}/>
                </View>
                <View style = {{width :windowW,height:1,backgroundColor:'black'}}>
                </View>

            </TouchableOpacity>
        )
    }
    render(){

        return(

            <SafeAreaView>

                <View style ={{width:windowW,height:54 ,backgroundColor :'black',flexDirection:'row'}}>
                    <Image style={{width:30, height:30,resizeMode:'contain',margin:12}}
                           source={require('./menu.png')}
                    />

                    <TouchableOpacity onPress={() =>  this.props.navigation.navigate('Location')}>
                    <Text style = {{color :'white', fontSize:18,margin :12,marginTop:17 ,width :windowW -100}}>
                        {this.state.location}
                    </Text>
                    </TouchableOpacity>
                </View>
<View>
                <Carousel
                    autoplay
                    autoplayTimeout={5000}
                    loop
                    index={0}
                    pageSize={BannerWidth}>
                    {this.state.mys.map((image, index) => this.renderPage(image, index))}
                </Carousel>

</View>

            <View style ={{flexDirection:'column', backgroundColor:'#D3D3D3'}}>

                <Text style={{fontSize:18, color:'black', margin:10}}>Services in your locality</Text>

                <FlatList style={{backgroundColor:'#f2f2f2', marginTop:2, marginLeft:5, marginRight:5}}
                          data={this.state.category}

                          keyExtractor={this._keyExtractor}
                          renderItem={this.renderRowItem}
                />





            </View>
            </SafeAreaView>
        );
    }
}