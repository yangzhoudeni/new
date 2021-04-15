import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView } from 'react-native'

export default class App extends Component {
    show=()=>{
        const arr=[]
        for(let i=0;i<30;i++){
            arr.push(<Text style={{fontSize:30}}>{i}</Text>)
        }
        return arr
    }
    render() {
        return (
            //view:基础容器
            <ScrollView>{this.show()}</ScrollView>
        )
    }
}

const styles = StyleSheet.create({})
