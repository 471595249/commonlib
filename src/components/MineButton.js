/**
 * Created by xzh on 14:09 2019-08-02
 *
 * @Description: 个人中心线页面头部下方按钮, 布局为上部为图片, 下部为文字
 */


import React, {Component} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {size} from '../tool/ScreenUtil';

export default class MineButton extends Component{

  constructor(props) {
    super(props)
  }

  componentDidMount() {

  }

  clickAction() {
    if (this.props.clickAction) {
      this.props.clickAction(this.props.route);
    }
  }

  render() {
    const {title, imgPath} = this.props;
    return (
      <TouchableOpacity activeOpacity={0.9} onPress={() => {this.clickAction()}}>
        <View style={styles.container}>
          <Image style={styles.icon} source={imgPath} resizeMode='contain'/>
          <Text style={{color: 'rgba(38, 38, 38, 1)', fontSize: size(20)}} allowFontScaling={false}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  touchStyle: {

  },
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    width: size(81),
    height: size(44),
    marginBottom: size(11),
  }
})
