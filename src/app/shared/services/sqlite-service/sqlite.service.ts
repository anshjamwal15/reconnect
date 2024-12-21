import { Injectable } from '@angular/core';
import { CapacitorSQLite } from '@capacitor-community/sqlite';
import { AllotedModel } from 'src/app/features/alloted-list/alloted-list.model';

@Injectable({
  providedIn: 'root',
})
export class SQLiteService {
  private readonly dbName = 'reconnectDB';

  constructor() { }

  async createDatabase(): Promise<void> {
    try {
      const exists = await CapacitorSQLite.isDatabase({ database: this.dbName });

      if (!exists.result) {
        console.log('Database does not exist. Creating...');
        await CapacitorSQLite.createConnection({ database: this.dbName });
        await CapacitorSQLite.open({ database: this.dbName });

        const createTableQuery = `
          CREATE TABLE IF NOT EXISTS profiles (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            instructions TEXT,
            datetime TEXT
          );
        `;
        await CapacitorSQLite.execute({ database: this.dbName, statements: createTableQuery });
        console.log('Database created and initialized.');
      } else {
        console.log('Database already exists. Opening...');
        await CapacitorSQLite.open({ database: this.dbName });
      }
    } catch (err) {
      console.error('Error creating/opening database:', err);
    }
  }

  async saveProfile(name: string, instructions: string, datetime: string): Promise<void> {
    try {
      if (!(await CapacitorSQLite.isDatabase({ database: this.dbName })).result) {
        await CapacitorSQLite.open({ database: this.dbName });
      }

      const insertQuery = `
        INSERT INTO profiles (name, instructions, datetime) 
        VALUES (?, ?, ?);
      `;
      await CapacitorSQLite.run({
        database: this.dbName,
        statement: insertQuery,
        values: [name, instructions, datetime],
      });

      console.log('Profile saved successfully.');
    } catch (err) {
      console.error('Error saving profile:', err);
    }
  }


  async getAllProfiles(): Promise<AllotedModel[]> {
    try {
      if (!(await CapacitorSQLite.isDatabase({ database: this.dbName })).result) {
        await CapacitorSQLite.open({ database: this.dbName });
      }

      const query = `SELECT * FROM profiles;`;
      const result = await CapacitorSQLite.query({
        database: this.dbName,
        statement: query,
        values: [],
      });

      const allotedList: AllotedModel[] = [];
      if (result.values && result.values?.length > 0) {
        for (const v of result.values) {
          allotedList.push(new AllotedModel(v.name, v.instructions, new Date(v.datetime)));
        }
      }
      return allotedList || [];
    } catch (err) {
      console.error('Error fetching profiles:', err);
      return [];
    }
  }

  async updateProfile(id: number, name: string, instructions: string, datetime: string): Promise<void> {
    try {
      if (!(await CapacitorSQLite.isDatabase({ database: this.dbName })).result) {
        await CapacitorSQLite.open({ database: this.dbName });
      }

      const updateQuery = `
        UPDATE profiles
        SET name = ?, instructions = ?, datetime = ?
        WHERE id = ?;
      `;
      await CapacitorSQLite.run({
        database: this.dbName,
        statement: updateQuery,
        values: [name, instructions, datetime, id],
      });

      console.log(`Profile with ID ${id} updated successfully.`);
    } catch (err) {
      console.error(`Error updating profile with ID ${id}:`, err);
    }
  }

  /**
   * Deletes a profile from the database.
   */
  async deleteProfile(id: number): Promise<void> {
    try {
      if (!(await CapacitorSQLite.isDatabase({ database: this.dbName })).result) {
        await CapacitorSQLite.open({ database: this.dbName });
      }

      const deleteQuery = `
        DELETE FROM profiles
        WHERE id = ?;
      `;
      await CapacitorSQLite.run({
        database: this.dbName,
        statement: deleteQuery,
        values: [id],
      });
    } catch (err) {
      console.error(`Error deleting profile with ID ${id}:`, err);
    }
  }
}




