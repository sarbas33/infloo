import { Dimensions, PixelRatio } from 'react-native';

const { width } = Dimensions.get('window');
const scale = width / 360;

export const normalize = (size) => Math.round(PixelRatio.roundToNearestPixel(size * scale));
