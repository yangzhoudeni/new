import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList, Image, Dimensions } from 'react-native'
const {width,height}=Dimensions.get('screen')
const rpx=x=>(width/750)*x
//多列布局
export default class App extends Component {

    state={result:[]}
    componentDidMount(){
        const url='https://api.apiopen.top/getWangYiNews?page=1'
        fetch(url)
        .then(res=>res.json())
        .then(res=>{
            console.log(res)
            this.setState({result:res.result})
        })
       }
    render() {
        return (
        <FlatList 
        numColumns={2}
        renderItem={this._renderItem}
        data={this.state.result}  
        keyExtractor={(item,index)=>index+''}>
        
        </FlatList>
        )
    }
    _renderItem=({item})=>{
        const space=rpx(10)
        const box_w=(rpx(750)-3*space)/2
        return (
            <View style={{width:box_w,marginLeft:space,marginTop:space}}>
                <Image source={{uri:item.image}} style={{width:200,height:100}}></Image>
                <View>
                    <Text style={{fontSize:rpx(30)}} numberOfLines={2}>{item.title}</Text>
                    <Text style={{fontSize:rpx(25),color:'gray'}}>{item.passtime}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
