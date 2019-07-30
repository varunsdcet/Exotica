import React, {Component} from 'react';
import {Platform,ActivityIndicator, StyleSheet,AsyncStorage, Text, View ,NetInfo ,ScrollView,Image,TouchableOpacity ,Alert,Container ,TextInput , Dimensions} from 'react-native';
import Button from 'react-native-button'
import styles from './Style.js'
import { DrawerActions } from 'react-navigation';
import { TextField } from 'react-native-material-textfield';
import { Dropdown } from 'react-native-material-dropdown';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'


type Props = {};
const windowW= Dimensions.get('window').width
const windowH = Dimensions.get('window').height

let data = [{
    value: 'Bald',
}, {
    value: 'Short',
}, {
    value: 'Medium',
}, {
    value: 'Long',
}];


let datas=[{
    value:'Yes',
},{
    value:'No',
}]

let datass=[{
    value:'Light',
},{
    value:'Medium',
},{
    value:'Hairy',
}
]

let datassbody=[{
    value:'Thin',
},{
    value:'Medium',
},{
    value:'Fat',
},{
    value:'Fatty',
}
]

let dataLang=[{
    value:'English',
},{
    value:'Deutsche',
},{
    value:'Spanish',
},{
    value:'Latin',
}
]

export default class EscortProfile extends Component<Props> {
    state = {
        phone: '',
        password:'',breast:'', waist:'', hips:'', weight:'', height:'', interests:'',
        occup:'',drinks:'',food:'', aromas:'', dress:'',desc:''
    };


    _handlePressSubmit =()=>{
        this.props.navigation.navigate('Availability')
      //  this.props.navigation.navigate('EscortHome')
    }

// t
    render() {
        let { phone, breast, waist,hips, weight, height, interests, occup, drinks, food, aromas, dress, desc } = this.state;


        return (
            <View style={{flex:1, flexDirection:'column', margin:10,}}>
                <KeyboardAwareScrollView >
                    <View style={{flexDirection:'row', width:'100%',height:70}}>

                        <View style={{width:'25%', backgroundColor:'white', flexDirection:'row',}}>
                            <Text style={{marginTop:20,fontSize:18,  color:'black'}}>Sexuality</Text>
                        </View>

                        <View style={{width:'75%', flexDirection:'row',marginTop:20,}}>
                            <Image style={{width:23, height:23, resizeMode:'contain',}} source={require('./right.png')}/>
                            <Text style={{fontSize:18,  color:'black', marginLeft:5}}>Hetero</Text>
                            <Dropdown containerStyle={{width:'70%', height:150, marginTop:-35, marginLeft:10}}
                                      fontSize={18}
                                      labelFontSize={13}
                                      dropdownPosition={-5}

                                      label='Hair Length'
                                      data={data}
                            />
                        </View>


                    </View>

                    <View style={{flexDirection:'row', width:'100%',height:60}}>

                        <View style={{width:'25%', backgroundColor:'white', flexDirection:'row',}}>

                        </View>

                        <View style={{width:'75%', flexDirection:'row',marginTop:10,}}>
                            <Image style={{width:23, height:23, resizeMode:'contain',}} source={require('./right.png')}/>
                            <Text style={{fontSize:18,  color:'black', marginLeft:5}}>Bi</Text>
                            <Dropdown containerStyle={{width:'70%', height:150, marginTop:-35, marginLeft:10}}
                                      fontSize={18}
                                      labelFontSize={13}

                                      label='Choose'
                                      data={datas}
                            />
                        </View>


                    </View>



                    <View style={{flexDirection:'row', width:'100%',height:60}}>

                        <View style={{width:'25%', backgroundColor:'white', flexDirection:'row',}}>

                        </View>

                        <View style={{width:'75%', flexDirection:'row',marginTop:10,}}>
                            <Image style={{width:23, height:23, resizeMode:'contain',}} source={require('./right.png')}/>
                            <Text style={{fontSize:18,  color:'black', marginLeft:5}}>Homo</Text>
                            <Dropdown containerStyle={{width:'70%', height:150, marginTop:-35, marginLeft:10}}
                                      fontSize={18}
                                      labelFontSize={13}

                                      label='Choose'
                                      data={datas}
                            />
                        </View>


                    </View>


                    <View style={{flexDirection:'row', width:'100%',height:60}}>

                        <View style={{width:'25%', backgroundColor:'white', flexDirection:'row',}}>

                        </View>

                        <View style={{width:'75%', flexDirection:'row',marginTop:10,}}>
                            <Image style={{width:23, height:23, resizeMode:'contain',}} source={require('./right.png')}/>
                            <Text style={{fontSize:18,  color:'black', marginLeft:5}}>Trans</Text>
                            <Dropdown containerStyle={{width:'70%', height:150, marginTop:-35, marginLeft:10}}
                                      fontSize={18}
                                      labelFontSize={13}

                                      label='Choose'
                                      data={datass}
                            />
                        </View>


                    </View>


                    <View style={{flexDirection:'row', width:'100%',height:60}}>

                        <View style={{width:'25%', backgroundColor:'white', flexDirection:'row',}}>
                            <Text style={{marginTop:10,fontSize:18,  color:'black'}}>Body Type</Text>
                        </View>

                        <View style={{width:'75%', flexDirection:'row',marginTop:10,}}>
                            <Image style={{width:23, height:23, resizeMode:'contain',}} source={require('./right.png')}/>
                            <Text style={{fontSize:18,  color:'black', marginLeft:5}}>Slim</Text>
                            <Dropdown containerStyle={{width:'70%', height:150, marginTop:-35, marginLeft:10}}
                                      fontSize={18}
                                      labelFontSize={13}
                                      dropdownPosition={-5}

                                      label='Body Hair'
                                      data={datass}
                            />
                        </View>


                    </View>

                    <View style={{flexDirection:'row', width:'100%',height:60}}>

                        <View style={{width:'25%', backgroundColor:'white', flexDirection:'row',}}>

                        </View>

                        <View style={{width:'75%', flexDirection:'row',marginTop:10,}}>
                            <Image style={{width:23, height:23, resizeMode:'contain',}} source={require('./right.png')}/>
                            <Text style={{fontSize:18,  color:'black', marginLeft:5}}>Thin</Text>
                            <Dropdown containerStyle={{width:'70%', height:150, marginTop:-35, marginLeft:10}}
                                      fontSize={18}
                                      labelFontSize={13}

                                      label='Body Thickness'
                                      data={datassbody}
                            />
                        </View>


                    </View>


                    <View style={{flexDirection:'row', width:'100%',height:60}}>

                        <View style={{width:'25%', backgroundColor:'white', flexDirection:'row',}}>

                        </View>

                        <View style={{width:'75%', flexDirection:'row',marginTop:10,}}>
                            <Image style={{width:23, height:23, resizeMode:'contain',}} source={require('./right.png')}/>
                            <Text style={{fontSize:18,  color:'black', marginLeft:5}}>Athletic</Text>
                            <Dropdown containerStyle={{width:'67%', height:150, marginTop:-35, marginLeft:10}}
                                      fontSize={18}
                                      labelFontSize={13}

                                      label='Choose'
                                      data={datas}
                            />
                        </View>


                    </View>

                    <View style={{flexDirection:'row', width:'100%',height:60}}>

                        <View style={{width:'25%', backgroundColor:'white', flexDirection:'row',}}>

                        </View>

                        <View style={{width:'75%', flexDirection:'row',marginTop:10,}}>
                            <Image style={{width:23, height:23, resizeMode:'contain',}} source={require('./right.png')}/>
                            <Text style={{fontSize:18,  color:'black', marginLeft:5}}>Muscular</Text>
                            <Dropdown containerStyle={{width:'63%', height:150, marginTop:-35, marginLeft:10}}
                                      fontSize={18}
                                      labelFontSize={13}

                                      label='Choose'
                                      data={datas}
                            />
                        </View>


                    </View>

                    <View style={{flexDirection:'row', width:'100%',height:60}}>

                        <View style={{width:'25%', backgroundColor:'white', flexDirection:'row',}}>

                        </View>

                        <View style={{width:'75%', flexDirection:'row',marginTop:10,}}>
                            <Image style={{width:23, height:23, resizeMode:'contain',}} source={require('./right.png')}/>
                            <Text style={{fontSize:18,  color:'black', marginLeft:5}}>Curvy</Text>
                            <Dropdown containerStyle={{width:'67%', height:150, marginTop:-35, marginLeft:10}}
                                      fontSize={18}
                                      labelFontSize={13}

                                      label='Choose'
                                      data={datas}
                            />
                        </View>


                    </View>


                    <View style={{flexDirection:'row', width:'100%',height:50}}>

                        <View style={{width:'25%', backgroundColor:'white', flexDirection:'row',}}>

                        </View>

                        <View style={{width:'75%', flexDirection:'row',marginTop:10,}}>
                            <Image style={{width:23, height:23, resizeMode:'contain',}} source={require('./right.png')}/>
                            <Text style={{fontSize:18,  color:'black', marginLeft:5}}>BBW</Text>
                            <Dropdown containerStyle={{width:'67%', height:150, marginTop:-35, marginLeft:10}}
                                      fontSize={18}
                                      labelFontSize={13}

                                      label='Choose'
                                      data={datas}
                            />
                        </View>


                    </View>


                    <View style={{flexDirection:'row', width:'100%', backgroundColor:'white', height:60, justifyContent:'space-between'}}>

                        <TextField
                            label='Breast/Chest'
                            value={breast}
                            containerStyle={{width:'45%'}}
                            keyboardType = 'number-pad'

                            onChangeText={ (breast) => this.setState({ breast }) }
                        />
                        <TextField
                            label='Waist'
                            value={waist}
                            containerStyle={{width:'33%', marginLeft:10,}}
                            keyboardType = 'number-pad'

                            onChangeText={ (waist) => this.setState({ waist }) }
                        />
                        <TextField
                            label='Hips'
                            value={hips}
                            containerStyle={{width:'18%', marginLeft:10, marginRight:10}}
                            keyboardType = 'number-pad'
                            onChangeText={ (hips) => this.setState({ hips }) }
                        />

                    </View>

                    <TextField
                        label='Height'
                        value={height}
                        containerStyle={{width:'20%'}}
                        keyboardType = 'number-pad'
                        onChangeText={ (height) => this.setState({ height }) }
                    />
                    <TextField
                        label='Weight'
                        value={weight}
                        containerStyle={{width:'20%'}}
                        keyboardType = 'number-pad'
                        onChangeText={ (weight) => this.setState({ weight }) }
                    />


                    <View style={{flexDirection:'row', width:'100%',height:60}}>

                        <View style={{width:'25%', backgroundColor:'white', flexDirection:'row',}}>
                            <Text style={{marginTop:10,fontSize:18,  color:'black'}}>Languages</Text>
                        </View>

                        <View style={{width:'75%', flexDirection:'row',marginTop:10,}}>


                            <Dropdown containerStyle={{width:'70%', height:150, marginTop:-35, marginLeft:10}}
                                      fontSize={18}
                                      labelFontSize={13}


                                      label='Choose Language'
                                      data={dataLang}
                            />
                        </View>


                    </View>

                    <View style={{flexDirection:'row', width:'100%',height:60}}>

                        <View style={{width:'25%', backgroundColor:'white', flexDirection:'row',}}>
                            <Text style={{marginTop:10,fontSize:18,  color:'black'}}>Interests</Text>
                        </View>

                        <View style={{width:'75%', flexDirection:'row',marginTop:-30,}}>


                            <TextField
                                label='Fill Out Your Interests'
                                value={interests}
                                containerStyle={{width:'100%'}}

                                onChangeText={ (interests) => this.setState({ interests }) }
                            />

                        </View>


                    </View>

                    <View style={{flexDirection:'row', width:'100%',height:60}}>

                        <View style={{width:'25%', backgroundColor:'white', flexDirection:'row',}}>
                            <Text style={{marginTop:10,fontSize:18,  color:'black'}}>Food</Text>
                        </View>

                        <View style={{width:'75%', flexDirection:'row',marginTop:-30,}}>


                            <TextField
                                label='Food you like'
                                value={food}
                                containerStyle={{width:'100%'}}

                                onChangeText={ (food) => this.setState({ food }) }
                            />

                        </View>


                    </View>

                    <View style={{flexDirection:'row', width:'100%',height:60}}>

                        <View style={{width:'25%', backgroundColor:'white', flexDirection:'row',}}>
                            <Text style={{marginTop:10,fontSize:18,  color:'black'}}>Drinks</Text>
                        </View>

                        <View style={{width:'75%', flexDirection:'row',marginTop:-30,}}>


                            <TextField
                                label='Drinks you like'
                                value={drinks}
                                containerStyle={{width:'100%'}}

                                onChangeText={ (drinks) => this.setState({ drinks }) }
                            />

                        </View>


                    </View>


                    <View style={{flexDirection:'row', width:'100%',height:60}}>

                        <View style={{width:'25%', backgroundColor:'white', flexDirection:'row',}}>
                            <Text style={{marginTop:10,fontSize:18,  color:'black'}}>Occupation</Text>
                        </View>

                        <View style={{width:'75%', flexDirection:'row',marginTop:-30,}}>


                            <TextField
                                label='Your Occupation'
                                value={occup}
                                containerStyle={{width:'98%', marginLeft:10,}}

                                onChangeText={ (occup) => this.setState({ occup }) }
                            />

                        </View>


                    </View>


                    <View style={{flexDirection:'row', width:'100%',height:60}}>

                        <View style={{width:'25%', backgroundColor:'white', flexDirection:'row',}}>
                            <Text style={{marginTop:10,fontSize:18,  color:'black'}}>Scent</Text>
                        </View>

                        <View style={{width:'75%', flexDirection:'row',marginTop:-30,}}>


                            <TextField
                                label='Your aromas'
                                value={aromas}
                                containerStyle={{width:'98%', marginLeft:10,}}

                                onChangeText={ (aromas) => this.setState({ aromas }) }
                            />

                        </View>


                    </View>


                    <View style={{flexDirection:'row', width:'100%',height:60}}>

                        <View style={{width:'25%', backgroundColor:'white', flexDirection:'row',}}>
                            <Text style={{marginTop:10,fontSize:18,  color:'black'}}>Dressing Style</Text>
                        </View>

                        <View style={{width:'75%', flexDirection:'row',marginTop:-30,}}>


                            <TextField
                                label='Your dressing style'
                                value={dress}
                                containerStyle={{width:'98%', marginLeft:10,}}

                                onChangeText={ (dress) => this.setState({ dress }) }
                            />

                        </View>


                    </View>


                    <View style={{flexDirection:'row', width:'100%',height:60}}>

                        <View style={{width:'25%', backgroundColor:'white', flexDirection:'row',}}>
                            <Text style={{marginTop:10,fontSize:18,  color:'black'}}>DESCRIPTION</Text>
                        </View>

                        <View style={{width:'75%', flexDirection:'row',marginTop:-30,}}>


                            <TextField
                                label='Description'
                                value={desc}
                                containerStyle={{width:'98%', marginLeft:10,}}

                                onChangeText={ (desc) => this.setState({ desc }) }
                            />

                        </View>


                    </View>

                    <Button
                        style={{width:'80%', height:40, backgroundColor:'black',color: 'white',padding :8 ,margin:10 ,alignSelf:'center' }}
                        onPress={() => this._handlePressSubmit()}
                        title="SUBMIT"
                    >
                        SUBMIT</Button>

                </KeyboardAwareScrollView>
            </View>
        );
    }
}