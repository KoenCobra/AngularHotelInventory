import {Inject, Injectable} from '@angular/core';
import {RoomsList} from "../rooms";
import {environment} from "../../../enviroments/environments";
import {APP_SERVICE_CONFIG} from "../../AppConfig/app.service";
import {AppConfig} from "../../AppConfig/appconfig.interface";
import {HttpClient, HttpHeaders, HttpRequest} from "@angular/common/http";
import {shareReplay} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class RoomsService {
  header = new HttpHeaders({
    'token': '12345'
  })
  roomLists: RoomsList[] = [];

  constructor(private http: HttpClient) {
  }

  getRooms$ = this.http.get<RoomsList[]>('/api/rooms',
    {headers: this.header})
    .pipe(
      shareReplay(1)
    );

  getRooms() {
    const header = new HttpHeaders({
      'token': '12345'
    })
    return this.http.get<RoomsList[]>('/api/rooms',
      {headers: header});
  }

  addRoom(room: RoomsList) {
    return this.http.post<RoomsList[]>('api/rooms', room);
  }

  updateRoom(room: RoomsList) {
    return this.http.put<RoomsList[]>(`api/rooms/${room.roomNumber}`, room);
  }

  deleteRoom(id: string) {
    return this.http.delete<RoomsList[]>(`api/rooms/${id}`);
  }

  getPhotos() {
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
