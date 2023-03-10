import {Weather} from 'src/types';

const rain: Weather = {
  code: 'rain',
  soundUrl: 'assets/sounds/rain.mp3',
  iconUrl: 'assets/icons/cloud-rain.svg',
  bgUrl: 'assets/images/rainy-bg.jpg'
};
const summer: Weather = {
  code: 'summer',
  soundUrl: 'assets/sounds/summer.mp3',
  iconUrl: 'assets/icons/sun.svg',
  bgUrl: 'assets/images/summer-bg.jpg'
};
const winter: Weather = {
  code: 'winter',
  soundUrl: 'assets/sounds/winter.mp3',
  iconUrl: 'assets/icons/cloud-snow.svg',
  bgUrl: 'assets/images/winter-bg.jpg'
};

export const WEATHERS: Weather[] = [
  rain,
  summer,
  winter
];
