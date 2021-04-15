import React, { Component } from 'react'
import { Dimensions,StatusBar, Text, StyleSheet, View, ImageBackground } from 'react-native'
const {width,height}=Dimensions.get('screen')
export default class App extends Component {
    render() {
        return (
            <View>
                {/* 沉浸式状态栏 */}
               <StatusBar 
                translucent 
                backgroundColor='transparent' 
                barStyle='dark-content' 
                /> 
                {/* 背景图 */}
                
                <ImageBackground blurRadius={80} style={{width,height}} source={require('./assets/证件照.jpg')}>
                <StatusBar 
                translucent 
                backgroundColor='transparent' 
                barStyle='dark-content' 
                />
                    <View style={{height:StatusBar.currentHeight}}></View>
                    <Text style={{fontSize:30,backgroundColor:'pink'}}>
                        fjdijfidjfid
                    </Text>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
