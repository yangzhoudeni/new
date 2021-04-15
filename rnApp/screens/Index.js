import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'

export default class index extends Component {
    componentDidMount(){
        console.log(this.props)
        
    }
    render() {
        return (
            <View>
                <Text style={{fontSize:50}}> index </Text>
                <Button title="跳转到Main" onPress={()=>this.props.navigation.push('Main')}></Button>
                <Button title='亮亮' color="green" onPress={()=>this.props.navigation.push('Teacher',{name:'亮',age:"35"})}></Button>
                <Button title='然然' color="orange" onPress={()=>this.props.navigation.push('Teacher',{name:'然然',age:"35"})}></Button>
            </View>
        )
    }
}
