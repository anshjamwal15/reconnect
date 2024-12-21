import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.pro.reconnect.app',
  appName: 'Reconnect',
  webDir: 'www',
  plugins: {
  CapacitorSQLite: {
    iosDatabaseLocation: "Documents",
    iosIsEncryption: false,
    androidIsEncryption: false,
  },
  SplashScreen: {
    launchShowDuration: 3000,
    launchAutoHide: true,
    backgroundColor: "#ffffff",
    androidSplashResourceName: "splash",
    iosSpinnerStyle : "large",
    //iosSplashResourceName: "Splash",
    androidScaleType: "CENTER_CROP",
    showSpinner: true,
    androidSpinnerStyle: "large",
    spinnerColor: "#999999"
  }
}
};

export default config;
