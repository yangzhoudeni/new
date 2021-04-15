import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity ,Image} from 'react-native'

export default class App extends Component {
    render() {
        return (
            <View>
            {/* // {TouchableOpacity:提供了一个点击动画} */}
            <TouchableOpacity onPress={()=>alert('疼')}>
                <Text style={{fontSize:30}}> 点击注册 </Text>
            </TouchableOpacity>
            <TouchableOpacity 
             activeOpacity={0.7}
             style={{
                 backgroundColor:'rgb(26,179,148)',
                 borderRadius:10,
                 alignSelf:'center',
                 width:300,
                 padding:10,
                 alignItems:'center',
                }}>
                <Text Style={{fontSize:24,color:'white',letterSpacing:5}}>
                  登录
                </Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image 
                style={{width:100,height:100,borderRadius:50}}
                source={{
                    uri:
                    'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0104e9571c743432f875a399db949b.jpg%402o.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620213634&t=b43c199a159a129b657ab3cc4ca79a0a',
                }}></Image>
            </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
