import { Component, OnInit } from '@angular/core';
import { AllotedModel } from './alloted-list.model';
import { SQLiteService } from 'src/app/shared/services/sqlite-service/sqlite.service';

@Component({
  selector: 'app-alloted-list',
  templateUrl: './alloted-list.page.html',
  styleUrls: ['./alloted-list.page.scss'],
})
export class AllotedListPage implements OnInit {

  public items: AllotedModel[] = []
  constructor(private sqliteService: SQLiteService) { }

  async ngOnInit() {
      this.items = await this.sqliteService.getAllProfiles();
  }
  
  getBackRoute(): string {
    if (window.history.length > 1) {
      return '/home';
    } else {
      return '/home';// Fallback to the home route
    }
  }
}