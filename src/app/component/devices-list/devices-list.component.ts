import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-devices-list',
  templateUrl: './devices-list.component.html',
  styleUrls: ['./devices-list.component.scss'],
})
export class DevicesListComponent implements OnInit {

  devices: any[] = [
    {
      name: "first device",
    },
    {
      name: "second device",
    },
    {
      name: "third device",
    },
    {
      name: "fourth device"
    }
  ]
  constructor() { }

  ngOnInit() {}

}
