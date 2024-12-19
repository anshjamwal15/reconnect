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

  constructor(private router: Router, private warningController: AlertController) { }

  formSubmit() {
    this.submitted = true;
    const isPhone = /^\d{10}$/.test(this.user.phoneNumber);
     if (!isPhone) {
      this.showAlert("Invalid phone", "Please add 10 digit number")
    } else if (this.user.name && this.user.phoneNumber) {
      this.router.navigate(['/add-photo'])
    } else {
      console.log('Form contains errors.');
    }
  }

  async showAlert(header: string, message: string) {
    const alert = await this.warningController.create({
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
