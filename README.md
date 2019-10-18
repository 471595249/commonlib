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

// TODO: What to do with the module?
RNVesalCommonlib;
```
  
>>>>>>> lib初始化提交;
