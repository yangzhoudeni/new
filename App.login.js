import React, { Component } from 'react'
import { Text, StyleSheet, View, Dimensions, Image, ImageBackground, StatusBar, TextInput, TouchableOpacity } from 'react-native'
const {width,height}=Dimensions.get('screen')
function rpx(x) {
    return (width/750)*x
}
export default class App extends Component {
    bgImg='https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fitem%2F201209%2F08%2F20120908134318_YVAwx.jpeg&refer=http%3A%2F%2Fcdn.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620223266&t=e4100dca7829ca7c896b3fdca652bc57'

    render() {
        return (
            <View>
                <ImageBackground blurRadius={10} style={{width,height}} source={{uri:this.bgImg}}>
                 <StatusBar translucent backgroundColor='transparent'/>
                 <View style={{height:StatusBar.currentHeight}}/> 
                 <View style={{paddingHorizontal:rpx(60)}}>
                    <Text style={styles.title}>欢迎登录</Text>
                    {/* 帐号 */}
                    <View style={styles.input_area}>
                    <Image source={require('./assets/b15.png')} style={{width:rpx(46),height:rpx(46),marginRight:10}}></Image>
                    <TextInput 
                     placeholder='请输入帐号' 
                     placeholderTextColor='white'
                     style={{color:'white',fontSize:rpx(40),flex:1}}
                     >
                            
                     </TextInput>
                     </View>
                     {/* 密码 */}
                     <View style={[styles.input_area,{marginTop:15}]}>
                    <Image source={require('./assets/b3.png')} style={{width:rpx(46),height:rpx(46),marginRight:10}}></Image>
                    <TextInput 
                     secureTextEntry
                     placeholder='请输入密码' 
                     placeholderTextColor='white'
                     style={{color:'white',fontSize:rpx(40),flex:1}}
                     >    
                     </TextInput>
                     </View>
                     <TouchableOpacity activeOpacity={0.7} style={{backgroundColor:'white',paddingVertical:10,borderRadius:100,alignItems:'center',marginHorizontal:10,marginTop:40}}>
                         <Text style={{fontSize:rpx(40),color:'orange'}}>登录</Text>
                     </TouchableOpacity>
                     {/* <View style={{paddingHorizontal:rpx(80),marginTop:'auto'}}> */}
                     <View style={{position:'absolute',bottom:-50,left:rpx(80),right:rpx(80)}}>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                             <View style={{backgroundColor:"white",flex:1,height:2}}></View>
                             <Text style={{color:'white',fontSize:rpx(35),marginHorizontal:40}}>其他登录方式</Text>
                             <View style={{backgroundColor:"white",flex:1,height:2}}></View>
                        </View>
                     </View>
                     <TouchableOpacity style={{alignItems:'center' ,position:'absoulte',Top:-200}}>
                         <Image source={require('./assets/weixin.png')} style={{width:rpx(100),height:rpx(100)}}>

                         </Image>
                         <Text>微信登录</Text>
                     </TouchableOpacity>
                 </View>
                </ImageBackground>
                <Text>thika</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    input_area:{
        borderRadius:100,
        backgroundColor:'rgba(0,0,0,0.5)',
        paddingHorizontal:20,
        marginTop:80,
        flexDirection:'row',
        alignItems:'center'
    },
    title:{
        fontSize:rpx(50),
        fontWeight:'bold',
        textAlign:'center',
        letterSpacing:10,//缝隙不随屏幕大小变化
        marginTop:130,
    }
})
