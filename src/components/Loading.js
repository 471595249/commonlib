
/**
 * 调用说明：
 * <Loading ref={r=>{this.Loading = r}} hide = {true} /> //放在布局的最后即可
 * 在需要显示的地方调用this.Loading.show();
 * 在需要隐藏的地方调用this.Loading.close();
 */

import React, {Component} from 'react';
import {ActivityIndicator, Modal, Text, View,Dimensions,StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');

import PropTypes from 'prop-types'

export default class Loading extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            title:"请求中"
        }
    }

    close() {
        this.setState({
            modalVisible: false
        })
        setTimeout(()=>{
            this.setState({modalVisible: false});
        },500)
    }

    show(title) {
        this.setState({modalVisible: true,title:title});
    }

    showAsync(title) {
        if (this.modalVisible) { // 如果当前正在显示加载, 那么修改加载的文字
            this.setState({title:title});
        } else { // 如果未显示, 那么初始化显示
            this.setState({modalVisible: true,title:title});
        }
    }

    render() {
        if (!this.state.modalVisible) {
            return null
        }
        let title = this.props.title
        return (
            <View style={styles.LoadingPage}>
                <View style={{
                    width: 100,
                    height: 100,
                    backgroundColor: "rgba(0,0,0,0.5)",
                    opacity: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 7
                }}>
                    <ActivityIndicator size="large" color="#FFF"/>
                    <Text style={{marginLeft: 10, color: "#FFF", marginTop: 10}}>{this.state.title}</Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    LoadingPage: {
        position: "absolute",
        left: 0,
        top: 0,
        backgroundColor: "rgba(0,0,0,0)",
        width: width,
        height: height,
        justifyContent: "center",
        alignItems: "center",
    },
});
Loading.PropTypes = {
    hide: PropTypes.bool.isRequired,
};
