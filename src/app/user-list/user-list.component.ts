// user-list.component.ts
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataService } from '../data.service';
import { User } from '../user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  selectedUserId: number | null = null;

  @Output() updateUserAtParent = new EventEmitter<any>();
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  onSelectUser(event: any): void {
    const userId = event?.target?.value || null;
    console.log('Selected User ID:', userId);
    this.selectedUserId = userId;
    this.updateUserAtParent.emit(this.selectedUserId);
  }
}
