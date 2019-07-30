import React, {Component, Fragment} from 'react';
import { Alert,StyleSheet, View, Text, TouchableOpacity, Dimensions,Image ,SafeAreaView} from 'react-native';

const GLOBAL = require('./Global');
import Button from 'react-native-button';
import styles from './Style.js'


const windowH = Dimensions.get('window').height;
const windowW = Dimensions.get('window').width;


export default class Sliders extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            header: () => null
        }
    }

    constructor(props) {
        super(props);

        this.state = {
            position: 1,

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

    _handlePress() {
         GLOBAL.type = "Login"
        this.props.navigation.navigate('ChooseType')

    }


    _handlePressRegister() {
        GLOBAL.type = "Signup"
        this.props.navigation.navigate('ChooseType')

    }

    render() {

        return (



               <SafeAreaView >

                    <View style={{width: '100%', height: '100%', flexDirection: 'column'}}>
                <Image style = {{width :'100%',height:'100%'}}
                       source={require('./images.png')}
                       />

                <Text style={{marginTop:-200,color:'white', fontSize : 30}}>{this.state.dataSource[this.state.position].title}</Text>
                <Text style={styles.welcomeText}>DATES ON DEMAND </Text>

                <View style={{position:'absolute', bottom:10, flexDirection:'row', }}>
                    <TouchableOpacity style={styles.loginButton}>
                        <Button style={{color: 'white'}}
                                color="transparent"

                                onPress={() => this._handlePress()}
                                title="Log In"
                        >
                            Log In</Button>
                    </TouchableOpacity>
                    <TouchableOpacity style ={styles.regButton}>
                        <Button
                            style={{color: 'white'}}
                            color="transparent"
                            onPress={() => this._handlePressRegister()}
                            title="Register"
                        >
                            Register</Button>
                    </TouchableOpacity>
                </View>
                </View>
               </SafeAreaView>



        );
    }
}