import React, { Component } from 'react'
import { Text, StyleSheet, View, Button, Pressable } from 'react-native'

export default class App extends Component {
    render() {
        return (
            <View style={{alignItems:'center'}}>
                <Text> textInComponent </Text>
                <Button title="我是按钮" onPress={()=>alert('疼')}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
