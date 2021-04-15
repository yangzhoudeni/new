import React, { Component } from 'react'
import { Text, StyleSheet, View,Image, ScrollView } from 'react-native'

export default class App extends Component {
    state={result:[]}
    componentDidMount(){
        //挂载周期
        //axios
        const url='https://api.apiopen.top/getWangYiNews';
        fetch(url).then(res=>res.json())
        .then(res=>{console.log(res)
          this.setState({result:res.result})
        })
    }
    show=()=>this.state.result.map((item,index)=><Image key={index} source={{uri:item.image}} style={{width:200,height:140}}></Image>)
    
    render() {
        return (
            <View>
                <ScrollView>{this.show()}</ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
