import {Component, OnInit} from '@angular/core';
import {Room, RoomsList} from "./rooms";

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  room: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  };

  roomlist: RoomsList[] = [];

  selectedRoom!: RoomsList;

  ngOnInit(): void {
    this.roomlist = [{
      roomType: '1',
      amenities: 'Air conditioner, Free Wi-Fi, TV, Bathroom',
      price: 500,
      checkinTime: new Date('11-nov-2021'),
      checkoutTime: new Date('20-nov-2021'),
      photos: 'https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg'
    },
      {
        roomType: '2',
        amenities: 'Air conditioner, Free Wi-Fi, TV',
        price: 900,
        checkinTime: new Date('11-nov-2021'),
        checkoutTime: new Date('20-nov-2021'),
        photos: 'https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg'
      }
      ,
      {
        roomType: '3',
        amenities: 'Air conditioner, Free Wi-Fi',
        price: 1500,
        checkinTime: new Date('11-nov-2021'),
        checkoutTime: new Date('20-nov-2021'),
        photos: 'https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg'
      }]
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
    this.roomlist = [...this.roomlist, room];
  }
}
