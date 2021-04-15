import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList, Image, ActivityIndicator } from 'react-native'

export default class App extends Component {
    state={data:[],refreshing:false}
    componentDidMount(){
       const url="http://capi.douyucdn.cn/api/v1/live?limit=20&offset=0";
       fetch(url)
       .then(res=>res.json())
       .then(res=>{
           console.log(res)
           this.setState({data:res.data})
       })
    }
    render() {
        return (
            <FlatList 
               data={this.state.data} 
               keyExtractor={(item,index)=>index+''}
               renderItem={this._renderItem}
               ItemSeparatorComponent={()=>{
                  return <View style={{height:1,backgroundColor:'gray'}}></View>
               }}
               ListFooterComponent={this._ListFooterComponent}
               onEndReachedThreshold={0.1}
               onEndReached={this._onEndReached}
               onRefresh={this._onRefresh}
               refreshing={this.state.refreshing}
            >

            </FlatList>
        )
    }
    _onRefresh=()=>{
      this.setState({refreshing:true})
      const url="http://capi.douyucdn.cn/api/v1/live?limit=20&offset=1"
      fetch(url)
       .then(res=>res.json())
       .then(res=>{
           console.log(res)
           this.setState({data:res.data,refreshing:false})
           this.page=1
       })
    }
    page=1
    _onEndReached=()=>{
        const nextpage=this.page+1
        const url="http://capi.douyucdn.cn/api/v1/live?limit=20&offset="+nextpage;
       fetch(url)
       .then(res=>res.json())
       .then(res=>{
           console.log(res)
           this.setState({data:this.state.data.concat(res.data)})
           this.page=nextpage
       })
    }
    _ListFooterComponent=()=>{
        return <View style={{alignItems:'center',backgroundColor:'gray'}}>
            <ActivityIndicator color="yellow" size="large"></ActivityIndicator>
            <Text style={{fontSize:24}}>加载中</Text>
        </View>
    }
    _renderItem=({item})=>(
        <View style={{flexDirection:'row',padding:6,}}>
            <Image source={{uri:item.room_src}} style={{width:200,height:120}}></Image>
            <View style={{marginLeft:6,flex:1,justifyContent:'space-around'}}>
            <Text style={{fontSize:24}}>{item.room_name}</Text>
            <Text style={{fontSize:22,color:'orange'}}>{item.nickname}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})
