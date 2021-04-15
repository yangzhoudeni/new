import React, { Component } from 'react'
import { Text, StyleSheet, View ,Image, ImageComponent} from 'react-native'

export default class App extends Component {
    img='https://gimg2.baidu.com/image_search/src=http%3A%2F%2Ffile02.16sucai.com%2Fd%2Ffile%2F2014%2F0707%2Fcce1153db03f5788a88c96aff10e123c.jpg&refer=http%3A%2F%2Ffile02.16sucai.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620204122&t=d251ecdd7ea6ed0b7f847a2920486f66'
    render() {
        return (
            <View>
                {/* {必须手动给宽高} */}
                <Image source={{uri:this.img}} style={{width:200,height:200}}></Image>
                <Image blurRadius={9}  source={require('./assets/证件照.jpg')}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
