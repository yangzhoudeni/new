import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class App extends Component {
    render() {
        return (
            <View>
                <Text style={{fontSize:25}} selectable>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dignissimos est, veritatis magnam, hic ex numquam assumenda, blanditiis amet officia porro id repellat. Vero eveniet alias ipsam distinctio dolor! Ducimus.
                </Text>
                <Text style={{fontSize:25,color:'red'}} numberOfLines={2}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dignissimos est, veritatis magnam, hic ex numquam assumenda, blanditiis amet officia porro id repellat. Vero eveniet alias ipsam distinctio dolor! Ducimus.
                </Text>
                <Text 
                 style={{fontSize:25,color:'red'}}
                 numberOfLines={2}
                 onPress={()=>alert('疼')}
                 >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dignissimos est, veritatis magnam, hic ex numquam assumenda, blanditiis amet officia porro id repellat. Vero eveniet alias ipsam distinctio dolor! Ducimus.
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
