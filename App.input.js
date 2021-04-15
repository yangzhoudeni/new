import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput } from 'react-native'

export default class App extends Component {
    state={uname:'dingdings'}
    render() {
        return (
            <View style={{backgroundColor:'skyblue',height:'100%'}}>
            <View
              style={{
                  margin:20,
                  backgroundColor:'rgba(0,0,0,0.5)',
                  flexDirection:'row',
                  borderRadius:10,
                  paddingVertical:2,
                  paddingHorizontal:20,
                  alignItems:'center',
              }} 
            >
                <Text style={{fontSize:25,color:'white'}}>帐号</Text>
                <TextInput 
                style={{fontSize:25,color:'orange',
                // backgroundColor:'green',
                flex:1,marginLeft:15}}
                placeholder='请输入帐号' 
                value={this.state.uname}
                onChangeText={(value)=>this.setState({uname:value})}/>
             </View>
             <Text style={{fontSize:26}}>{this.state.uname}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
