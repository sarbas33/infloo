import { Dimensions, PixelRatio } from 'react-native';

const { width, height } = Dimensions.get('window');
var aspectRatio = height / width;
//aspectRatio = 1.3;
const scale = width / 360;
const adjustmentFactor = aspectRatio < 1.8 ? (aspectRatio/1.8) : 1;

export const normalize = (size) => Math.round(PixelRatio.roundToNearestPixel(size * scale * adjustmentFactor));
export const getResponsiveWidth = () => Math.round(PixelRatio.roundToNearestPixel(width * adjustmentFactor));