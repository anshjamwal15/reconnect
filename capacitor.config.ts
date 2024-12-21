import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'Reconnect',
  webDir: 'www',
  plugins: {
  CapacitorSQLite: {
    iosDatabaseLocation: "Documents",
    iosIsEncryption: false,
    androidIsEncryption: false,
  },
  SplashScreen: {
    launchShowDuration: 30000,
    launchAutoHide: true,
    backgroundColor: "#fffffff",
    androidSplashResourceName: "splash",
    iosSplashResourceName: "Splash",
    androidScaleType: "CENTER_CROP",
    showSpinner: true,
    androidSpinnerStyle: "large",
    spinnerColor: "#999999"
  }
}
};

export default config;
