import {Injectable} from '@angular/core';
import {RoomsList} from "../rooms";
import {environment} from "../../../enviroments/environments";

@Injectable({
  providedIn: 'root'
})

export class RoomsService {

  roomLists: RoomsList[] = [{
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
    }];

  constructor() {
    console.log(environment.apiEndpoint);
  }

  getRooms() {
    return this.roomLists;
  }
}
