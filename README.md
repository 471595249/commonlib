<<<<<<< HEAD
# commonlib
vesal common components and function
=======

# react-native-vesal-commonlib

## Getting started

`$ npm install react-native-vesal-commonlib --save`

### Mostly automatic installation

`$ react-native link react-native-vesal-commonlib`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-vesal-commonlib` and add `RNVesalCommonlib.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNVesalCommonlib.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.vesal.common.RNVesalCommonlibPackage;` to the imports at the top of the file
  - Add `new RNVesalCommonlibPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-vesal-commonlib'
  	project(':react-native-vesal-commonlib').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-vesal-commonlib/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-vesal-commonlib')
  	```


## Usage
```javascript
import RNVesalCommonlib from 'react-native-vesal-commonlib';
```

项目下包含组件列表及用法: 


```
/**
 * @Description: 所有page页面继承此组件, 用于做全页面公用函数等功能;
 */
1. BaseComponent
```
  
```  
/**
 * @Description: 所有page页面集成此组件, 用于做全页面公用函数等功能; 组件已包含Loading、SelectDialog、 Loading等组件, 按需使用显示及接收回调;
 * @implementation: <ContainerView
 *                  ref={r => this.mainView = r} >
 *                  </ContainerView>
 *                  this.mainView._showLoading('需要显示的文字');
 *                  this.mainView._closeLoading();
 *                  this.mainView._toast();
 *                  ...
 */
2. ContainerView;
```

```
/**
 * @Description: 导航栏 默认返回按钮 可定制文字等内容
 * @implementation: 
 * <NavBar 
 *  title='热门推荐' 
 *  navigation={this.props.navigation}   
 *  hideback={true} 
 *  leftTitle={'左侧文字'}
 *  leftAction={'左侧回调函数'}
 *  rightImage={'右侧按钮图片'}
 *  ...
 * />
 */
3. NavBar;
```

```
/**
 * @Description:  弹出选择框, 支持多选和单选, 使用方法如下
 *
 * @Description:  type == 弹出框类型, 支持 单选(Default)/多选(Mutilple), 默认单选, 不传 type 字段即可
 * @Description:  name == 弹出框功能名称, 方便识别结果
 * @Description:  data == 弹出框可选择的内容
 * @Description:  selectDialogAction == 选择完毕的回调
 * @Description:  closeAction == 关闭弹出框
 *
 * <SelectDialog
 *    ref={r=>{this.SelectDialog = r}}
 *    type={this.state.selectDialogType}
 *    data={this.state.selectDialogData}
 *    name={this.state.selectDialogName}
 *    selectDialogAction={(result) => {this.recieveDialogResult(result)}}
 * />
 *
 * this.SelectDialog.show();
 * this.SelectDialog.close();
 */
4. SelectDialog;
```

```
/**
 * @Description:  图片上绘制圆形和矩形区域
 */
4. ImageMapper;
```

```
/**
 * @Description:  图片验证码(纯数字)
 */
5. GraphicValidate;
```

```
/**
 * @Description:  验证码倒计时
 */
6. countDownButton;
```

```
/**
 * @Description:  线
 */
7. Line;
```

```
/**
 * @Description:  个人中心列表cell
 */
8. ListEditCell;
```

```
/**
 * @Description:  加载圈
 */
9. Loading;
```

```
/**
 * @Description:  防止二次点击Touch
 */
10. MyTouchableOpacity;
```

```
/**
 * @Description:  暂无数据视图
 */
11. NullData;
```

```
/**
 * @Description:  个人中心线页面头部下方按钮, 布局为上部为图片, 下部为文字
 */
12. MineButton;
```

```
/**
 * @Description:  宏
 */
14. Defined;
```

```
/**
 * @Description:  dp - px 尺寸转换
 */
15. ScreenUtil;
```


