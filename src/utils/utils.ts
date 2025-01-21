import { Dimensions, PixelRatio } from 'react-native';

const { width, height } = Dimensions.get('window');
const aspectRatio = height / width;
//const aspectRatio = 2.5;
const scale = width / 360;
const adjustmentFactor = aspectRatio < 1.8 ? (aspectRatio/1.8) : 1;

export const normalize = (size) => Math.round(PixelRatio.roundToNearestPixel(size * scale * adjustmentFactor));
export const getResponsiveWidth = () => Math.round(PixelRatio.roundToNearestPixel(width * adjustmentFactor));