import React, { Component } from 'react'
import { Text, StyleSheet, View, Switch } from 'react-native'

export default class App extends Component {
    state={isOpen:true}
    render() {
        return (
            <View>
                <Switch onValueChange={(value)=>this.setState({isOpen:value})}  value={this.state.isOpen} />
                <Switch onValueChange={isOpen=>this.setState({isOpen})}  value={this.state.isOpen} />
            </View>
        )
    }
}

const styles = StyleSheet.create({})
