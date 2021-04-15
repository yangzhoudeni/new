import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'

export default class main extends Component {
    render() {
        return (
            <View>
                <Text style={{fontSize:60}}> main </Text>
                <Button title="返回上一页" onPress={()=>this.props.navigation.goBack()}></Button>
            </View>
        )
    }
}
