import React, { Component } from 'react';
import {Platform,ActivityIndicator, StyleSheet,AlertIOS,TouchableHighlight,AsyncStorage,SafeAreaView, Text, View ,NetInfo ,Image,ScrollView,TouchableOpacity ,Alert,Container ,TextInput , Dimensions} from 'react-native';
import TouchID from 'react-native-touch-id' ;
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
class FingerprintPopup extends Component {
    _pressHandler() {
        TouchID.authenticate('to demo this react-native component', optionalConfigObject)
            .then(success => {
                Alert.alert('Info', 'Authenticated Successfully');
                this.props.navigation.replace('Splash')
            })
            .catch(error => {
                Alert.alert('Error', 'Authentication Failed '+error);
            });
    }
    componentDidMount() {

    }

    render() {
        return (
            <View>

                <TouchableHighlight onPress={this._pressHandler}>
                    <Text>
                        Authenticate with Touch ID
                    </Text>
                </TouchableHighlight>
            </View>
        );
    }

}



export default FingerprintPopup;
