import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Backend from "./Backend.js";
import { GiftedChat } from "react-native-gifted-chat";


type Props = {};
export default class Chat extends Component<Props> {
    state = {
        messages: []
    };



    renderBubble(props) {

        return (
            <View>
                <Text style={{color:'black'}}>{props.currentMessage.user.name}</Text>
            </View>
        );
    }
    componentWillMount() {}
    render() {

        return (
            <GiftedChat
                renderUsernameOnMessage = {true}
                messages={this.state.messages}
                onSend={message => {
                    Backend.sendMessage(message);
                }}

                user={{
                    _id: 138,
                    name: 'prashant'
                }}
            />
        );
    }


    componentDidMount() {
        Backend.loadMessages(message => {
            this.setState(previousState => {
                return {
                    messages: GiftedChat.append(previousState.messages, message)
                };
            });
        });
    }
    componentWillUnmount() {
        Backend.closeChat();
    }
}
