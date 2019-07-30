import React, {Component, Fragment} from 'react';
import { Alert,StyleSheet, View, Text, TouchableOpacity, Dimensions,Image ,SafeAreaView} from 'react-native';

const GLOBAL = require('./Global');
import Button from 'react-native-button';
import styles from './Style.js'


const windowH = Dimensions.get('window').height;
const windowW = Dimensions.get('window').width;


export default class ChooseType extends Component {
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

        return (



            <SafeAreaView >

                <View style={{width: '100%', height: '100%', flexDirection: 'column'}}>
                    <Image style = {{width :'100%',height:'100%'}}
                           source={require('./date.jpg')}
                    />

                    <Text style={{marginTop:-200,color:'white', fontSize : 30}}>{this.state.dataSource[this.state.position].title}</Text>
                    <Text style={styles.welcomeText}>USE APP AS A </Text>

                    <View style={{position:'absolute', bottom:10, flexDirection:'row', }}>
                        <TouchableOpacity style={styles.loginButton}>
                            <Button style={{color: 'white'}}
                                    color="transparent"

                                    onPress={() => this._handlePress()}
                                    title="Log In"
                            >
                                ESCORT</Button>
                        </TouchableOpacity>
                        <TouchableOpacity style ={styles.regButton}>
                            <Button
                                style={{color: 'white'}}
                                color="transparent"
                                onPress={() => this._handlePressRegister()}
                                title="Register"
                            >
                                USER</Button>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>



        );
    }
}