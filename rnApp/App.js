import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import WebView from 'react-native-webview'
import AHWebView from 'react-native-autoheight-webview'
export default class App extends Component {
    data='<h1 style="color:red">Hello World</h1>'
    render() {
        // return (
        //     <WebView source={{uri:'https://www.bilibili.com'}}></WebView>
        // )
        // return <WebView source={{html:this.data}}></WebView>
        return (
            <ScrollView>
                <Text style={{fontSize:50}}>11111111111</Text>
                <AHWebView
                  source={{uri:'https://www.bilibili.com'}}
                 
                ></AHWebView>
                <Text style={{fontSize:50}}>1111111111 </Text>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({})
