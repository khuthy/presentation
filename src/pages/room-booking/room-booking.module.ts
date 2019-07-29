import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RoomBookingPage } from './room-booking';

@NgModule({
  declarations: [
    RoomBookingPage,
  ],
  imports: [
    IonicPageModule.forChild(RoomBookingPage),
  ],
})
export class RoomBookingPageModule {}
