import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.page.html',
  styleUrls: ['./create-profile.page.scss'],
})
export class CreateProfilePage {

  user = {
    name: '',
    addressLine1: '',
    addressLine2: '',
    country: '',
    zipCode: '',
    phoneNumber: ''
  };

  submitted: boolean = false;

  constructor(private router: Router, private alertController: AlertController) { }

  formSubmit() {
    this.submitted = true;
     if (!/^\d{10}$/.test(this.user.phoneNumber)) {
      this.showAlert("Invalid phone", "Please add 10 digit number")
    } else if (this.user.name && this.user.addressLine1 && this.user.country && this.user.zipCode && this.user.phoneNumber) {
      console.log('Form submitted successfully:', this.user);
      this.router.navigate(['/add-photo'])
    } else {
      console.log('Form contains errors.');
    }
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

}
