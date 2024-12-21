import { Component, OnInit } from '@angular/core';
import { SQLiteService } from '../../shared/services/sqlite-service/sqlite.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage implements OnInit {
  profile = {
    name: '',
    instructions: '',
    datetime: ''
  };

  constructor(private sqliteService: SQLiteService, private router: Router) {}

  async ngOnInit() {
    await this.sqliteService.createDatabase();
  }

  async saveProfile() {
    if (this.profile.name && this.profile.instructions && this.profile.datetime) {
      try {
        await this.sqliteService.saveProfile(this.profile.name, this.profile.instructions, this.profile.datetime);
        console.log('Profile saved successfully!');
        this.router.navigate(['/thank-you-two']);
      } catch (error) {
        console.error('Error saving profile:', error);
      }
    } else {
      console.error('Please fill in all the fields!');
    }
  }
  
  getBackRoute(): string {
    if (window.history.length > 1) {
      return '/location'; // Allow navigating back in history stack
    } else {
      return '/home'; // Fallback to the home route
    }
  }
}

