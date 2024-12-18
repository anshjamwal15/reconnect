import { Component, OnInit } from '@angular/core';
import { SQLiteService } from 'src/app/shared/services/sqlite-service/sqlite.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private sqliteService: SQLiteService) { }


  async ngOnInit() {
    await this.sqliteService.createDatabase();
  }
}
