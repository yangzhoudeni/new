//快捷提示rnc
import React, { Component } from 'react'
//RN特点使用js书写代码，通过神奇的编译器转化为原生的android和ios
//必须使用RN特供的组件，所以div p span在RN中均是违法的
import { Text, View } from 'react-native'

export default class App extends Component {
  render() {
    return (
      <View>
        <Text style={{fontSize:30}}>Hello World</Text>
      </View>
    )
  }
}
