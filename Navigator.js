import { createStackNavigator ,createAppContainer ,createDrawerNavigator} from 'react-navigation';

import Splash from './Splash.js';
import Sliders from './Sliders.js';
import Login from './Login.js';
import Register from './Register.js';
import ChooseType from './ChooseType.js';
import Home from './Home.js';
import Location from './Location.js';
import EscortList from './EscortList.js';
import EscortProfile from './EscortProfile.js';
import ListDetail from './ListDetail.js';
import Availability from './Availability.js';
import Timing from './Timing.js';
import AddressList from './AddressList.js';
import AddAddress from './AddAddress.js';
import Service from './Service.js';
import Chat from './Chat.js';
import EscortHome from './EscortHome.js';
import TimeSlot from './TimeSlot.js';
import FingerprintPopup from './FingerprintPopup.js';
const StackNavigator = createStackNavigator({



    Splash: { screen: Splash },
    Sliders: { screen: Sliders },
    Availability: { screen: Availability ,
        navigationOptions: ({ navigation }) => ({
            headerTintColor: 'white',
            title: 'Availability',
            headerStyle: {
                backgroundColor: 'black'

            }

        }),
    },
    EscortList: { screen: EscortList ,
        navigationOptions: ({ navigation }) => ({
            headerTintColor: 'white',
            title: 'List',
            headerStyle: {
                backgroundColor: 'black'

            }

        }),
    },
    TimeSlot: { screen: TimeSlot ,
        navigationOptions: ({ navigation }) => ({
            headerTintColor: 'white',
            title: 'TimeSlot',
            headerStyle: {
                backgroundColor: 'black'

            }

        }),
    },
    EscortProfile: { screen: EscortProfile ,
        navigationOptions: ({ navigation }) => ({
            headerTintColor: 'white',
            title: 'Profile',
            headerStyle: {
                backgroundColor: 'black'

            }

        }),
    },
    Register: { screen: Register ,
        navigationOptions: ({ navigation }) => ({
            headerTintColor: 'white',
            title: 'Register',
            headerStyle: {
                backgroundColor: 'black'

            }

        }),
    },
    ListDetail: { screen: ListDetail ,
        navigationOptions: ({ navigation }) => ({
            headerTintColor: 'white',
            title: 'Detail',
            headerStyle: {
                backgroundColor: 'black'

            }

        }),
    },
    Service: { screen: Service },
    AddressList: { screen: AddressList ,
        navigationOptions: ({ navigation }) => ({
            headerTintColor: 'white',
            title: 'Select Address',
            headerStyle: {
                backgroundColor: 'black'

            }

        }),
    },
    EscortHome: { screen: EscortHome },
    Timing: { screen: Timing ,
        navigationOptions: ({ navigation }) => ({
            headerTintColor: 'white',
            title: 'Select Service',
            headerStyle: {
                backgroundColor: 'black'

            }

        }),
    },
    AddAddress: { screen: AddAddress ,
        navigationOptions: ({ navigation }) => ({
            headerTintColor: 'white',
            title: 'Add Address',
            headerStyle: {
                backgroundColor: 'black'

            }

        }),
    },
    Home: { screen: Home },
    Chat: { screen: Chat },
    ChooseType: { screen: ChooseType },
    Location: { screen: Location ,
        navigationOptions: ({ navigation }) => ({
            headerTintColor: 'white',
            title: 'Location',
            headerStyle: {
                backgroundColor: 'black'

            }

        }),
    },
    Login: { screen: Login ,
        navigationOptions: ({ navigation }) => ({
            headerTintColor: 'white',
            title: 'Login',
            headerStyle: {
                backgroundColor: 'black'

            }

        }),
    },


});


export default createAppContainer(StackNavigator);
