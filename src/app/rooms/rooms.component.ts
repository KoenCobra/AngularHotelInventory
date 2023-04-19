import {AfterViewInit, Component, DoCheck, OnInit, ViewChild} from '@angular/core';
import {Room, RoomsList} from "./rooms";
import {HeaderComponent} from "../header/header.component";
import {RoomsService} from "./services/rooms.service";

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit {

  constructor(private roomService: RoomsService) {
  }
  room: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  };
  roomLists: RoomsList[] = [];
  selectedRoom!: RoomsList;
  title: string = '';

  toggle() {
    this.title = 'Rooms list'
  }

  ngOnInit(): void {
    this.roomLists = this.roomService.getRooms();
  }

  selectRoom(room: RoomsList) {
    this.selectedRoom = room;
  }

  addRoom() {
    const room: RoomsList = {
      roomType: '3',
      amenities: 'Air conditioner, Free Wi-Fi',
      price: 1500,
      checkinTime: new Date('11-nov-2021'),
      checkoutTime: new Date('20-nov-2021'),
      photos: 'https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg'
    }
    // this.roomlist.push(room);
    this.roomLists = [...this.roomLists, room];
  }

  ngDoCheck(): void {
    console.log('on changes called')
  }

  @ViewChild(HeaderComponent, {static: true}) headerComponent!: HeaderComponent;

  ngAfterViewInit(): void {
    console.log(this.headerComponent)
  }
}
