import {Inject, Injectable} from '@angular/core';
import {RoomsList} from "../rooms";
import {environment} from "../../../enviroments/environments";
import {APP_SERVICE_CONFIG} from "../../AppConfig/app.service";
import {AppConfig} from "../../AppConfig/appconfig.interface";
import {HttpClient, HttpRequest} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class RoomsService {

  roomLists: RoomsList[] = [];

  constructor(private http: HttpClient) {
  }

  getRooms() {
    return this.http.get<RoomsList[]>('/api/rooms');
  }

  addRoom(room: RoomsList){
    return this.http.post<RoomsList[]>('api/rooms', room);
  }

  updateRoom(room: RoomsList){
    return this.http.put<RoomsList[]>(`api/rooms/${room.roomNumber}`, room);
  }

  deleteRoom(id: string){
    return this.http.delete<RoomsList[]>(`api/rooms/${id}`);
  }

  getPhotos(){
    const request = new HttpRequest(
      'GET',
      `https://jsonplaceholder.typicode.com/photos`,
      {
        reportProgress: true
      }
    );
    return this.http.request(request);
  }
}
