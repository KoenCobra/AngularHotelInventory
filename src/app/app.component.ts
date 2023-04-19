import {Component, Inject, OnInit} from '@angular/core';
import {localstorageToken} from "./localstorage.token";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'HotelRoomInventory';

  role = 'User';

  constructor(@Inject(localstorageToken) private localStorage: Storage) {

  }

  ngOnInit(): void {
    this.localStorage.setItem('name', 'Hilton Hotel');
  }
}
