import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'

export default class Teacher extends Component {
    componentDidMount(){
        console.log(this.props)
        const name=this.props.route.params.name
        //setOptions:用于动态修改 导航栏配置
        this.props.navigation.setOptions({
            title:name,
            headerRight:()=><Button title="我是自定义按钮"></Button>
        })
    }
    render() {
        return (
            <View>
                <Text style={{fontSize:40}}> Teacher:{this.props.route.params.name} </Text>
                <Text style={{fontSize:40}}> Teacher:{this.props.route.params.name} </Text>
            </View>
        )
    }
}
