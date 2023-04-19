import {Inject, Injectable} from '@angular/core';
import {RoomsList} from "../rooms";
import {environment} from "../../../enviroments/environments";
import {APP_SERVICE_CONFIG} from "../../AppConfig/app.service";
import {AppConfig} from "../../AppConfig/appconfig.interface";
import {HttpClient} from "@angular/common/http";

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
}
