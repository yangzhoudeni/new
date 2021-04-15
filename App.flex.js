import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class App extends Component {
    render() {
        return (
            <View style={styles.box}>
                <Text style={styles.one}> one </Text>
                <Text style={styles.two}> two </Text>
                <Text style={styles.three}> three </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    box:{
        backgroundColor:'pink',
        height:450,
        flexDirection:'column',//默认竖向
        flexDirection:'column-reverse',//竖向逆向
        flexDirection:'row',//横向
       
        flexDirection:'row-reverse',//横向逆向
         //交叉轴：与主轴方向垂直的方向
        alignItems:'flex-start',//开头对齐
        alignItems:'flex-end',//尾部对齐
        alignItems:'center',//中间对齐
        //主轴布局：目前右边-左边
        justifyContent:'center',
        justifyContent:'flex-start',//默认值：开头对齐
        justifyContent:'space-around',//空白环绕
        justifyContent:'space-between',//中间间隔
        justifyContent:'space-evenly',//空白均分

    },
    one:{
        backgroundColor:'red',
        height:100,
        fontSize:30,
        flex:1
    },
    two:{
        backgroundColor:'blue',
        height:100,
        fontSize:30,
        //子元素的交叉轴布局：只修改当前元素
        alignSelf:'flex-start',
        flex:1
    },
    three:{
        backgroundColor:'green',
        height:100,
        fontSize:30,
        flex:2,
    }
})
