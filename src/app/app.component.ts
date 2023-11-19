// src/app/app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedUserId: number | null = null;

  onSelectUser(userId: number): void {
    this.selectedUserId = userId;
  }
}
