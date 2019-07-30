import React, {Component, Fragment} from 'react';
import { Alert,StyleSheet, View, Text, TouchableOpacity,TextInput ,Dimensions,Image ,SafeAreaView} from 'react-native';

const GLOBAL = require('./Global');
import Button from 'react-native-button';
import styles from './Style.js'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
const windowH = Dimensions.get('window').height;
const windowW = Dimensions.get('window').width;


export default class Availability extends Component {


    constructor(props) {
        super(props);

        this.state = {
            position: 1,
            value :'',

            dataSource: [
                {
                    url: require('./images.png'),
                }, {
                    url: require('./images.png'),
                }, {
                    url: require('./images.png'),
                },
            ],
        };
    }

    componentWillMount() {


    }

    componentWillUnmount() {

    }
    _handlePressSubmit =()=>{

          this.props.navigation.navigate('EscortHome')
    }
    _handlePress() {
        GLOBAL.user = "1"

        if (GLOBAL.type == "Login") {

            this.props.navigation.navigate('Login')
        }else {
            this.props.navigation.navigate('Register')
        }

    }


    _handlePressRegister() {

        GLOBAL.user = "2"
        if (GLOBAL.type == "Login") {

            this.props.navigation.navigate('Login')
        }else {
            this.props.navigation.navigate('Register')
        }

    }

    render() {
        var radio_props_one = [
            {label: 'Client Place', value: 1 },
            {label: 'My Place', value: 2 },
            {label: 'Both', value: 3 }
        ];
        return (



            <SafeAreaView >
            <KeyboardAwareScrollView>
          <View >

              <Text style = {{color :'black',fontSize:20,margin:12}}>
                  Location
              </Text>
              <RadioForm style={{marginLeft:15, marginTop:12}}
                         labelStyle={{paddingRight:20}}
                         radio_props={radio_props_one}
                         initial={0}
                         buttonSize={8}
                         formHorizontal={false}
                         buttonColor={'#201344'}
                         labelHorizontal={true}
                         animation={false}
                         labelColor={'black'}
                         selectedButtonColor={'#201344'}
                         onPress={(value) => {this.setState({value:value});}}
              />
              <View>
              <Text style = {{color :'black',fontSize:20,margin:12}}>
                  Monday
              </Text>

              <View style = {{flexDirection:'row',width:'100%'}}>
                  <TextInput
                      style={{marginLeft:5,height: 30,backgroundColor: '#D3D3D3', fontSize: 20,width:'40%'}}

                      onChangeText={(text) => this.setState({text})}
                  />
                  <TextInput
                      style={{marginLeft:5,height: 30,backgroundColor: '#D3D3D3', fontSize: 20,width:'40%'}}

                      onChangeText={(text) => this.setState({text})}
                  />

              </View>
              </View>

              <View>
                  <Text style = {{color :'black',fontSize:20,margin:12}}>
                      Tuesday
                  </Text>

                  <View style = {{flexDirection:'row',width:'100%'}}>
                      <TextInput
                          style={{marginLeft:5,height: 30,backgroundColor: '#D3D3D3', fontSize: 20,width:'40%'}}

                          onChangeText={(text) => this.setState({text})}
                      />
                      <TextInput
                          style={{marginLeft:5,height: 30,backgroundColor: '#D3D3D3', fontSize: 20,width:'40%'}}

                          onChangeText={(text) => this.setState({text})}
                      />

                  </View>
              </View>
              <View>
                  <Text style = {{color :'black',fontSize:20,margin:12}}>
                      Wednesday
                  </Text>

                  <View style = {{flexDirection:'row',width:'100%'}}>
                      <TextInput
                          style={{marginLeft:5,height: 30,backgroundColor: '#D3D3D3', fontSize: 20,width:'40%'}}

                          onChangeText={(text) => this.setState({text})}
                      />
                      <TextInput
                          style={{marginLeft:5,height: 30,backgroundColor: '#D3D3D3', fontSize: 20,width:'40%'}}

                          onChangeText={(text) => this.setState({text})}
                      />

                  </View>
              </View>
              <View>
                  <Text style = {{color :'black',fontSize:20,margin:12}}>
                      Thursday
                  </Text>

                  <View style = {{flexDirection:'row',width:'100%'}}>
                      <TextInput
                          style={{marginLeft:5,height: 30,backgroundColor: '#D3D3D3', fontSize: 20,width:'40%'}}

                          onChangeText={(text) => this.setState({text})}
                      />
                      <TextInput
                          style={{marginLeft:5,height: 30,backgroundColor: '#D3D3D3', fontSize: 20,width:'40%'}}

                          onChangeText={(text) => this.setState({text})}
                      />

                  </View>
              </View>
              <View>
                  <Text style = {{color :'black',fontSize:20,margin:12}}>
                      Friday
                  </Text>

                  <View style = {{flexDirection:'row',width:'100%'}}>
                      <TextInput
                          style={{marginLeft:5,height: 30,backgroundColor: '#D3D3D3', fontSize: 20,width:'40%'}}

                          onChangeText={(text) => this.setState({text})}
                      />
                      <TextInput
                          style={{marginLeft:5,height: 30,backgroundColor: '#D3D3D3', fontSize: 20,width:'40%'}}

                          onChangeText={(text) => this.setState({text})}
                      />

                  </View>
              </View>
              <View>
                  <Text style = {{color :'black',fontSize:20,margin:12}}>
                      Saturday
                  </Text>

                  <View style = {{flexDirection:'row',width:'100%'}}>
                      <TextInput
                          style={{marginLeft:5,height: 30,backgroundColor: '#D3D3D3', fontSize: 20,width:'40%'}}

                          onChangeText={(text) => this.setState({text})}
                      />
                      <TextInput
                          style={{marginLeft:5,height: 30,backgroundColor: '#D3D3D3', fontSize: 20,width:'40%'}}

                          onChangeText={(text) => this.setState({text})}
                      />

                  </View>
              </View>
              <View>
                  <Text style = {{color :'black',fontSize:20,margin:12}}>
                      Sunday
                  </Text>

                  <View style = {{flexDirection:'row',width:'100%'}}>
                      <TextInput
                          style={{marginLeft:5,height: 30,backgroundColor: '#D3D3D3', fontSize: 20,width:'40%'}}

                          onChangeText={(text) => this.setState({text})}
                      />
                      <TextInput
                          style={{marginLeft:5,height: 30,backgroundColor: '#D3D3D3', fontSize: 20,width:'40%'}}

                          onChangeText={(text) => this.setState({text})}
                      />

                  </View>
              </View>

              <View>
                  <Text style = {{color :'black',fontSize:20,margin:12}}>
                      Prior to Notice
                  </Text>

                  <View style = {{flexDirection:'row',width:'100%'}}>
                      <TextInput
                          style={{marginLeft:5,height: 30,backgroundColor: '#D3D3D3', fontSize: 20,width:'40%'}}

                          onChangeText={(text) => this.setState({text})}
                      />


                  </View>
              </View>

          </View>
                <Button
                    style={{ marginTop:15,width:'70%',alignSelf:'center',padding:8,height:40, backgroundColor:'black',color: 'white'}}
                    onPress={() => this._handlePressSubmit()}
                    title="SIGN UP"
                >SUBMIT </Button>
            </KeyboardAwareScrollView>
            </SafeAreaView>



        );
    }
}