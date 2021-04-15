import React, { Component } from 'react'
import { Text, StyleSheet, View, ActivityIndicator } from 'react-native'

export default class App extends Component {
    render() {
        return (
            <View>
                <View style={{alignItems:'center',backgroundColor:'light'}}>
                    <ActivityIndicator color="green" size="large"></ActivityIndicator>
                    <Text style={{fontSize:25}}>加载中</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
