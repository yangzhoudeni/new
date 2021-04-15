import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList, Image, Dimensions } from 'react-native'
const {width,height}=Dimensions.get('screen')
 const rpx=x=>(width/750)*x
export default class App extends Component {
    state=({result:[]})
    componentDidMount(){
        const douyu='http://capi.douyucdn.cn/api/v1/live?limit=20&offset=0';
        fetch(douyu)
        .then(res=>res.json())
        .then(res=>{
            console.log(res)
            this.setState({result:res.data})
        })
    }
    
    render() {
        return (
           <FlatList 
           numColumns={2}
           renderItem={this._renderItem} 
           data={this.state.result} 
           keyExtractor={(item,index)=>index+''}></FlatList>
        )
    }
    _renderItem=({item})=>{
        const space=10;
        const box_w=rpx(750-10*3)/2
        const online=item.online>=1e4?item.online/(1e4).toFixed(1)+'万':item.online;
        return (
        <View style={{width:box_w ,marginLeft:space, flex:1,marginTop:space}}>
            <View style={{borderRadius:5,overflow:'hidden'}}>
            <Image source={{uri:item.room_src}} style={{width:220,height:120}}></Image>
            <Text style={{position:'absolute',right:10,color:'white',padding:2,backgroundColor:'rgba(0,0,0,0.2)',left:0,textAlign:'right'}}>{online}</Text>
            <Text style={{position:'absolute',color:'white',bottom:0,padding:4}}>{item.nickname}</Text>
            </View>
            <View>
            <Text style={{fontSize:rpx(30),margin:2,color:'gray'}}>{item.room_name}</Text>
            
            </View>
        </View>
        )}
}

const styles = StyleSheet.create({})
