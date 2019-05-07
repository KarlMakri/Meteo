import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.css']
})
export class MeteoComponent implements OnInit {

  connected: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  login() {
    this.connected = true;
  }

  logout() {
    this.connected = false;
  }


}
