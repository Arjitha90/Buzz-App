import React from 'react';
import {View , Text} from 'react-native';

export default class In extends React.Component{
    render(){
        return(
            <View styles = {{flex: 1,justifyContent:'center', alignItems : 'center'}}>
                <Text>Instagram</Text>
            </View>
        )
    }
}