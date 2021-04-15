import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity, Modal, Dimensions } from 'react-native'
const {width,height}=Dimensions.get('screen')
export default class App extends Component {
    img='https://img0.baidu.com/it/u=3231005548,635944634&fm=26&fmt=auto&gp=0.jpg'
    state={show:false}
    render() {
        return (
            <View>
                <Modal visible={this.state.show} animationType='slide'>
                    <TouchableOpacity onPress={()=>this.setState({show:false})} >
                    <Image source={{uri:this.img}} style={{width:'100%',height:'100%'}}></Image>
                    </TouchableOpacity>
                    
                </Modal>
                <TouchableOpacity onPress={()=>this.setState({show:true})}>
                 <Image source={{uri:this.img}} style={{width:150,height:150}}></Image>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
