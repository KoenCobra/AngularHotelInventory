import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {RoomsList} from "../rooms";

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit, OnChanges {

  @Input() rooms: RoomsList[] = [];

  @Input() title: string = '';

  @Output() selectedRoom = new EventEmitter<RoomsList>();

  selectRoom(room: RoomsList) {
    this.selectedRoom.emit(room)
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    if (changes['title']) {
      this.title = changes['title'].currentValue.toUpperCase();
    }
  }

  ngOnInit(): void {
  }
}
