import React, {Component} from "react";
import {
    TouchableOpacity,
    View,
    Text,
    StyleSheet,
    Platform,
    NativeModules,
    ScrollView,
    ImageBackground
} from "react-native";
import {size} from '../tool/ScreenUtil';

export default class AppUpdate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showUpdate: false,
            mustUpdate: "no",
            newAppVersion: "",
            description: "",
            url: ""
        };
    }

    async componentDidMount() {
        if (Platform.OS == 'android') {
            // await this.checkVersion();
        }

    }


    // async checkVersion() {
    //     const currVersion = DeviceInfo.getVersion();
    //     const netInterface = NetInterface.getAppVersion + "?version=" + currVersion + "&plat=" + Platform.OS + "&business=kfxl";
    //     HttpTool.GET(netInterface)
    //         .then(res => {
    //             if (res.List.length > 0) {
    //                 let item = res.List[0];
    //                 let serverVersion = item.version;
    //                 let mustUpdate = item.must_update;
    //                 let localVersion = new Number(DeviceInfo.getVersion().replace(/\./g, ""));
    //                 if (serverVersion > localVersion) {
    //                     this.setState({
    //                         showUpdate: true,
    //                         mustUpdate: mustUpdate,
    //                         newAppVersion: "V" + item.title,
    //                         description: item.description,
    //                         url: item.url
    //                     })
    //                     //     //"发现新版本"+mustUpdate+";;" + item.title + "(" + item.size + ")",
    //                 }
    //             }
    //
    //         })
    //         .catch(error => {
    //             console.log("error:" + JSON.stringify(error))
    //         })
    // };

    toAppStore() {

        // NativeModules.DownloadApk.downloading(
        //     this.state.url,
        //     "vesal.apk"
        // );
    }


    render() {
        let width = 5 * size(110);
        if (this.state.showUpdate) {
            return <View style={{
                position: 'absolute',
                right: 0,
                left: 0,
                top: 0,
                width: '100%',
                height: '100%',
                backgroundColor: "rgba(0,0,0,0.8)",
                justifyContent: "center",
                alignItems: 'center'
            }}>
                <ImageBackground source={require('../img/update_backgroundImg.png')} style={{width:size(550),height:size(732)}}>
                    <Text style={{
                        color:"#fff",
                        fontWeight: "bold",
                        fontSize:size(42),
                        marginTop:size(100),
                        marginLeft:size(40)
                    }}>发现新版本</Text>
                    <Text style={{fontWeight: "800",fontSize:size(28),color:'#fff', marginLeft:size(40),marginTop:size(10)}}> {this.state.newAppVersion}</Text>
                    <View style={{marginTop:size(130),height:size(250),marginLeft:size(40),marginRight:size(40)}}>
                        <ScrollView style={{flex: 1}}   showsVerticalScrollIndicator={false}>
                            <Text style={{fontSize:size(28),lineHeight:size(30),color:'#282828'}}>{this.state.description}
                            </Text>
                       </ScrollView>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:size(40)}}>
                        {this.state.mustUpdate=='no'? <TouchableOpacity style={{width: size(230), height: size(80),
                            backgroundColor: "#f4f4f4",justifyContent:'center',alignItems:'center',borderRadius:size(10)}}
                                                                        onPress={() => {
                                                                            this.setState({
                                                                                showUpdate: false
                                                                            })}}>
                            <Text style={{color:'#000'}}>取消</Text>
                        </TouchableOpacity>:null}
                         <TouchableOpacity
                            onPress={() => {
                                {this.toAppStore()}
                            }}
                            style={{width: size(230), height: size(80),
                                backgroundColor: "#489ef6",justifyContent:'center',alignItems:'center',borderRadius:size(10)}}>
                            <Text style={{color: '#fff'}}>立即更新</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        } else {
            return null
        }

    }
}

const styles = StyleSheet.create({
    container: {},

})
