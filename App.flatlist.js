import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList } from 'react-native'
//FlatList高性能列表组件
export default class App extends Component {
    skills=['axios','ajax','promise','hxr','axios','ajax','promise','hxr','axios','ajax','promise','hxr','axios','ajax','promise','hxr']
    //
    render() {
        return (
           <FlatList data={this.skills} renderItem={this._renderItem1} keyExtractor={(item,index)=>index+''}>
               
           </FlatList>
        )
    }
    //数组中的每一个元素，都会传递到此方法中，询问长什么样子
    _renderItem1=({index,item})=>
        //实际 const item=data.item index=data.index
        (
              <View>
                  <Text style={{fontSize:30}}>{index}</Text>
                  <Text style={{color:'red',fontSize:30}}>{item}</Text>
              </View>
        );
    
    _renderItem=data=>{
        console.log(data)
        const {index,item}=data
        //实际 const item=data.item index=data.index
        return(
              <View>
                  <Text style={{fontSize:30}}>{index}</Text>
                  <Text style={{color:'red',fontSize:30}}>{item}</Text>
              </View>
        );
    }
}

const styles = StyleSheet.create({})
