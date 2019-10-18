import React, {Component} from 'react'
import {StyleSheet, View, TouchableOpacity, Animated, Easing, Dimensions} from 'react-native'
import { size} from '../Tool/ScreenUtil';

/**
 * 弹出层
 */
const {width, height} = Dimensions.get('window')
export default class PopUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            offset: new Animated.Value(0),
            show: false
        }
    }

    in() {
        Animated.timing(
            this.state.offset,
            {
                easing: Easing.linear,
                duration: 200,
                toValue: 1
            }
        ).start()
    }

    out() {
        Animated.timing(
            this.state.offset,
            {
                easing: Easing.linear,
                duration: 200,
                toValue: 0
            }
        ).start()

        setTimeout(
            () => this.setState({show: false}),
            300
        )
    }

    show() {
        this.setState({
            show: true
        }, this.in())
    }

    hide() {
        this.out()
    }

    defaultHide() {
        this.props.hide()
        this.out()
    }


    render() {
        let {transparentIsClick, modalBoxBg, modalBoxHeight} = this.props;
        if (this.state.show) {
            return (
                <View style={styles.container}>
                    <TouchableOpacity style={{height: height - modalBoxHeight}}
                                      onPress={transparentIsClick && this.defaultHide.bind(this)}>
                        {/* <View style={{ height: screen.height - screen.height * 0.076 }}></View> */}
                    </TouchableOpacity>
                    <Animated.View
                        style={[styles.modalBox, {
                            backgroundColor: modalBoxBg,
                            transform: [{
                                translateY: this.state.offset.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [height, height - modalBoxHeight]
                                }),
                            }]
                        }]}>
                        {this.props.children}
                    </Animated.View>
                </View>
            )
        }
        return <View/>
    }
}

const styles = StyleSheet.create({
    container: {
        width: width,
        height: height,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        position: 'absolute',
        top: 0,
        zIndex: 9999999
    },
    modalBox: {
        position: 'absolute',
        width: width,
        height: height,
        // top: 0
    }
});

PopUp.defaultProps = {
    modalBoxHeight: size(220), // 盒子高度
    modalBoxBg: '#FCFCFC', // 背景色
    hide: function () {
    }, // 关闭时的回调函数
    transparentIsClick: true  // 透明区域是否可以点击
};