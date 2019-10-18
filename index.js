
import { NativeModules } from 'react-native';

const { RNVesalCommonlib } = NativeModules;

// defined宏
import {deviceWidth, deviceHeight, isIPhoneXPaddTop, isIPhoneXFooter, isIPhoneX, setSpText, size} from './src/tool/ScreenUtil';

// components
import BaseComponent from './src/components/BaseComponent';
import ContainerView from './src/components/ContainerView';
import Line from './src/components/Line';
import ListCell from './src/components/ListCell';
import ListEditCell from './src/components/ListEditCell';
import MineBuuton from './src/components/MineButton';
import GraphicValidate from './src/components/GraphicValidate';
import Loading from './src/components/Loading';
import NavBar from './src/components/NavBar';
import NullData from './src/components/NullData';
import ImageMapper from './src/components/ImageMapper';

export default {
  deviceWidth,
  deviceHeight,
  isIPhoneXPaddTop,
  isIPhoneXFooter,
  isIPhoneX,
  setSpText,
  size,
  BaseComponent,
  ContainerView,
  Line,
  ListEditCell,
  ListCell,
  MineBuuton,
  GraphicValidate,
  Loading,
  NavBar,
  NullData,
  ImageMapper
}
