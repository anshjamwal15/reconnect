import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Geolocation } from '@capacitor/geolocation';
import { LoadingController } from '@ionic/angular';
import axios from 'axios';
import { PhotoService } from 'src/app/shared/services/photo-service/photo.service';

@Component({
  selector: 'app-add-photo',
  templateUrl: './add-photo.page.html',
  styleUrls: ['./add-photo.page.scss'],
})
export class AddPhotoPage {

  public isSaved: boolean = false;

  constructor (private photoService: PhotoService, private router: Router) {}

  async addPhotoToGallery() {
    this.isSaved = await this.photoService.addNewToGallery();
  }

  verify() {
    if (this.isSaved) {
      this.router.navigate(["/thank-you"]);
    }
  }

  getBackRoute(): string {
    if (window.history.length > 1) {
      return '/create-profile'; 
    } else {
      return '/home'; 
    }
  }
}
