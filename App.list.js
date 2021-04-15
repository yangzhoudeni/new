import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList, ActivityIndicator } from 'react-native'

export default class App extends Component {
    emps=[
        {name:'文化',age:40},
        {name:'文化',age:40},
        {name:'文化',age:40},
        {name:'文化',age:40},
        {name:'文化',age:40},
        {name:'文化',age:40},
        {name:'文化',age:40},
        {name:'文化',age:40},
    ];
    render() {
        return (
            <FlatList ListFooterComponent={this._ListFooterComponent} ListHeaderComponent={this._ListHeaderComponent} ItemSeparatorComponent={this._ItemSeparatorComponent} data={this.emps} renderItem={this._renderItem} keyExtractor={(item,index)=>index+''}></FlatList>
        )
    }
    _ListFooterComponent=()=>
    (
        <View style={{flexDirection:'row',justifyContent:'center',padding:15,backgroundColor:'green'}}>
            <ActivityIndicator color="green" size="large"/>
            <Text style={{fontSize:25}}>加载中。。。</Text>
        </View>
    )
    _ListHeaderComponent=()=>
    (
        <View style={{backgroundColor:'skyblue',padding:10}}>
            <Text style={{fontSize:35,color:'white'}}>web教研部</Text>
        </View>
    )
    _ItemSeparatorComponent=()=>
    (
      <View style={{backgroundColor:'gray',height:2}}/>
    );
    _renderItem=({index,item})=>
    (<View>
        <Text style={{fontSize:20}}>{index}</Text>
        <Text style={{fontSize:30}}>{item.name}</Text>
        <Text style={{fontSize:30}}>{item.age}</Text>
    </View>
    )

}

const styles = StyleSheet.create({})
