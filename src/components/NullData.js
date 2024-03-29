import React, {Component} from "react";
import {Image, Text, TouchableOpacity, View,} from "react-native";
import {deviceWidth, size} from '../tool/ScreenUtil';

export default class NullData extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={{width: deviceWidth, height: size(400), justifyContent: 'center', alignItems: 'center',}}>
                <Image source={require('../img/notdata.png')} style={{width:size(306),height:size(200)}}/>
                <Text style={{fontSize: size(34),marginTop: size(10)}}>暂无数据</Text>
            </View>
        )
    }
}