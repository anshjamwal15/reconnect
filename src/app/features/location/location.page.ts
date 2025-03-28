import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Geolocation } from '@capacitor/geolocation';
import { AlertController, LoadingController, Platform } from '@ionic/angular';
import axios from 'axios';

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage {

  location: { latitude: number; longitude: number } | null = null;
  displayName: string = "";

  constructor(private waitingController: LoadingController, private router: Router, private alertController: AlertController) { }

  async fetchLocation() {
    const loading = await this.waitingController.create({
      message: 'Loading...',
      spinner: 'circles',
      duration: 3000
    });
    await loading.present();

    try {
      const permission = await Geolocation.checkPermissions();
      if (permission.location === 'denied') {
        await loading.dismiss();
        await Geolocation.requestPermissions();
        return;
      }
      const position = await Geolocation.getCurrentPosition({ timeout: 10000, enableHighAccuracy: true, maximumAge: 3600});
      this.location = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      };

      const response = await axios.get(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${this.location.latitude}&lon=${this.location.longitude}`
      );
      this.displayName = response.data.display_name || 'No data';
      console.log("Changed the display name successfully");
      await loading.dismiss();
    } catch (error) {
      
      if (error instanceof Error) {
        this.showAlert(
          'Location Disabled',
          'Location services are disabled. Please enable them in your device settings and try again.'
        );
        console.error('Error getting location:', error.message);
      }
    }
    await loading.dismiss();
  }

  async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: [
        {
          text: 'Ok',
          role: 'cancel',
        },
      ],
    });
    await alert.present();
  }
  continue() {
    if (this.displayName !== "") {
      this.router.navigate(["/schedule"])
    }
  }

  getBackRoute(): string {
    if (window.history.length > 1) {
      return '';
    } else {
      return '/home';
    }
  }

}
