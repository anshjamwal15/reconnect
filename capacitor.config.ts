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
    launchShowDuration: 3000,
    launchAutoHide: true,
    backgroundColor: "#077575",
    androidScaleType: "CENTER_CROP",
    showSpinner: true,
    androidSpinnerStyle: "large",
    spinnerColor: "#999999"
  }
}
};

export default config;
