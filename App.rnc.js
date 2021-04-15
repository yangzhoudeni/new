import React, { Component } from 'react'
import { Dimensions,Text, View } from 'react-native'

const {width,height}=Dimensions.get('screen');
function rpx(x){
    return (width/750)*x //屏幕宽度750份，乘以分数；就可得到份数对应的实际像素值
}
export default class App extends Component {
    render() {
        return (
            <View>
                <Text style={{width:rpx(280),backgroundColor:'blue',height:50}}> textInComponent </Text>
            </View>
        )
    }
}
