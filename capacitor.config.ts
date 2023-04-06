import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.palhacapipocka',
  appName: 'brincadeiraSons',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    "LocalNotifications": {
      "smallIcon": "ic_stat_ionic_logo",
      "iconColor": "#3E7DFF",
      "sound": "tadaa.wav"
    }
  }
};

export default config;
