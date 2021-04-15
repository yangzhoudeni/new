import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList, Image, ActivityIndicatorComponent, ActivityIndicator } from 'react-native'

export default class App extends Component {
    state={result:[],refreshing:false}
    componentDidMount(){
        const url='https://api.apiopen.top/getWangYiNews?page=1';
        fetch(url)
        .then(res=>res.json())
        .then(res=>{
            console.log(res)
            this.setState({result:res.result})
        });
    }
    render() {
        return (
            <FlatList 
            refreshing={this.state.refreshing}
            onRefresh={this._Refresh}
            onEndReachedThreshold={0.1}
            onEndReached={this._onEndReached}
            ListFooterComponent={this._ListFooterComponent}
            ItemSeparatorComponent={()=>(
                <View style={{height:1,backgroundColor:'gray'}}></View>
            )} data={this.state.result} keyExtractor={(item,index)=>index+''} renderItem={this._renderItem}>

            </FlatList>
        )
    }
    _Refresh=()=>{
        const url='https://api.apiopen.top/getWangYiNews?page=1';
        fetch(url)
        .then(res=>res.json())
        .then(res=>{
            console.log(res)
            this.setState({refreshing:false,result:res.result})
            this.page=1
        });
    }
    page=1
    _onEndReached=()=>{
        const nextpage=this.page+1
        const url='https://api.apiopen.top/getWangYiNews?page='+nextpage;
        fetch(url)
        .then(res=>res.json())
        .then(res=>{
            console.log(res)
            this.setState({result:this.state.result.concat(res.result)})
            this.page=nextpage
        });
    }
      

      
    
    _ListFooterComponent=()=>
    (
       <View style={{alignItems:'center',padding:7,backgroundColor:'lightgray'}}>
           <ActivityIndicator color="red" size="large"></ActivityIndicator>
           <Text style={{fontSize:25,color:'gray'}}>加载中。。。</Text>
       </View>
    );
    _renderItem=({item})=>
        (
            <View style={{padding:15,flexDirection:'row'}}>
              <Image source={{uri:item.image}} style={{width:150,height:100}}></Image>
              <View style={{ marginLeft:5 ,flex:1,justifyContent:'space-around'}}>
                  <Text style={{fontSize:20}} numberOfLines={5}>{item.title}</Text>
                  <Text style={{fontSize:20,color:"gray"}}>{item.passtime}</Text>
              </View>
            </View>
        )
}

const styles = StyleSheet.create({})
