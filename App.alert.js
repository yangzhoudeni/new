import React, { Component } from 'react'
import { Text, StyleSheet, View, Button ,Alert} from 'react-native'

export default class App extends Component {
    showMsg(){
        Alert.alert('warning','命运',[
            {text:'好可怕',onPress:()=>alert('好可怕')},
            {text:'隐藏',onPress:()=>alert('好可怕')},
        ])
    }
    render() {
        return (
            <View style={{alignItems:'center'}}>
                <Button onPress={()=>{this.showMsg()}} title="弹出提示"></Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
