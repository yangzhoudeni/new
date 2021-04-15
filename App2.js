import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class App extends Component {
    render() {
        return (
            <View style={{color:'red'}}>
                <Text style={ss.tag}>textInComponent</Text>
                <Text style={ss.danger}>textInComponent</Text>
                <Text style={{color:'red',fontSize:30}}>
                    <Text style={{fontSize:40}}>$</Text>999.99{''}
                </Text>
            </View>
        )
    }
}
const ss=StyleSheet.create({
    tag:{
        color:'red',
        padding:'10',
        fontWeight:'bold',
        backgroundColor:'gray',
        margin:20,
        fontSize:30,
        textAlign:'center'
    },
    danger:{
        backgroundColor:'red',
        color:'white',
        textAlign:'center',
        fontSize:30
    }
})
