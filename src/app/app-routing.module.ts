import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EmployeeComponent} from "./employee/employee.component";
import {RoomsComponent} from "./rooms/rooms.component";
import {ContainerComponent} from "./container/container.component";
import {NotfoundComponent} from "./notfound/notfound.component";
import {RoomsBookingComponent} from "./rooms/rooms-booking/rooms-booking.component";
import {RoomsAddComponent} from "./rooms/rooms-add/rooms-add.component";

const routes: Routes = [
  {path: 'employee', component: EmployeeComponent},
  {path: 'rooms', loadChildren: () => import('./rooms/rooms.module').then((m) => m.RoomsModule)},
  {path: '', redirectTo: '/rooms', pathMatch: 'full'},
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
