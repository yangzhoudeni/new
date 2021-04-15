import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList, Image, Dimensions } from 'react-native'
const {width,height}=Dimensions.get('screen')
 const rpx=x=>(width/750)*x
export default class App extends Component {
    state={result:[]}
    componentDidMount(){
        const douyu='http://capi.douyucdn.cn/api/v1/live?limit=20&offset=0';
        fetch(douyu)
        .then(res=>res.json())
        .then(res=>{
            console.log(res)
            this.setState({result:res.data})
            //请求结束时添加定时器
            setInterval(()=>{
            //   console.log(this.f1)
              this.current=
                this.current==this.state.result.length-1?0:this.current+1
              this.f1.current.scrollToIndex({index:this.current})
            },2500)
        })
    }
    current=0    //创建一个变量，与某个组件绑定
    f1=React.createRef()
    render() {
        return (
            <View>
           <FlatList 
           onScroll={this._onScroll}
        //    numColumns={2}
           ref={this.f1}
           pagingEnabled
           horizontal
           renderItem={this._renderItem} 
           data={this.state.result} 
           keyExtractor={(item,index)=>index+''}></FlatList>
           </View>
        )
    }
    _onScroll=event=>{
        // event.persist()
        // console.log(event)
        const offset_x=event.nativeEvent.contentOffset.x
        const current = Math.round(offset_x/width)
        this.current=current
    }
    _renderItem=({item})=>{
        const space=10;
        const box_w=rpx(750-10*3)/2
        const online=item.online>=1e4?item.online/(1e4).toFixed(1)+'万':item.online;
        return (
        <View style={{width}}>
            <View style={{borderRadius:5,overflow:'hidden'}}>
            <Image source={{uri:item.room_src}} style={{width:700,height:width*0.55}}></Image>
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
