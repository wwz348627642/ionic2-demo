import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Brightness, BatteryStatus, BatteryStatusResponse, Device } from 'ionic-native';

let subscription = BatteryStatus.onChange().subscribe((status: BatteryStatusResponse) => {
   console.log(status.level, status.isPlugged);
});


@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  lightValue: number

  constructor(
  	public navCtrl: NavController
  ) { }

  changeLight(): void {
    Brightness.setBrightness(this.lightValue);
  }

  ngOnInit(): void {
    console.log(Device.isVirtual)
  }

  ngOnDestroy(): void {
    
  }


 }