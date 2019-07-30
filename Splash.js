import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Dimensions, Alert} from 'react-native';

import TouchID from 'react-native-touch-id' ;
const window = Dimensions.get('window');


type Props = {};
const optionalConfigObject = {
    title: 'Authentication Required', // Android
    imageColor: '#e00606', // Android
    imageErrorColor: '#ff0000', // Android
    sensorDescription: 'Touch sensor', // Android
    sensorErrorDescription: 'Failed', // Android
    cancelText: 'Cancel', // Android
    fallbackLabel: 'Show Passcode', // iOS (if empty, then label is hidden)
    unifiedErrors: false, // use unified error messages (default false)
    passcodeFallback: false, // iOS - allows the device to fall back to using the passcode, if faceid/touch is not available. this does not mean that if touchid/faceid fails the first few times it will revert to passcode, rather that if the former are not enrolled, then it will use the passcode.
};

export default class Splash extends Component<Props> {
    static navigationOptions = ({navigation})=> ({
        title: 'Tagg Digital',
        headerTintColor: '#ffffff',
        header:null,
        headerStyle: {
            backgroundColor: 'black',
            borderBottomColor: '#ffffff',
            borderBottomWidth: 3,
        },
        headerTitleStyle: {
            fontSize: 15,
            width:250,
            marginRight:10
        },
    });


componentWillMount(){
    TouchID.authenticate('to demo this react-native component', optionalConfigObject)
        .then(success => {
            Alert.alert('Info', 'Authenticated Successfully');
            this.props.navigation.navigate('Sliders')
        })
        .catch(error => {
            Alert.alert('Error', 'Authentication Failed '+error);
        });

}

    render() {
        return (
            <Image
                style={styles.stretch}
                source={require('./splash.png')}
            />

    );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    stretch :{
        width:'100%',
        height:'100%',

    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
