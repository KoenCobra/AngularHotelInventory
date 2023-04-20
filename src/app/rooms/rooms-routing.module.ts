import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RoomsComponent} from "./rooms.component";
import {RoomsAddComponent} from "./rooms-add/rooms-add.component";
import {RoomsBookingComponent} from "./rooms-booking/rooms-booking.component";

const routes: Routes = [
  {
    path: '', component: RoomsComponent,
    children: [{path: ':id', component: RoomsBookingComponent}]
  },
  {path: 'rooms/add', component: RoomsAddComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomsRoutingModule {
}
