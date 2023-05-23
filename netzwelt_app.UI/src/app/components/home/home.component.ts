import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Territory, TerritoryData } from 'src/models/territories';
import { NetzweltApiService } from 'src/services/netzwelt-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  territoryDataObject: TerritoryData = {
    id: "",
    name: "",
    parent: "",
    children: []
  }

  sortedTerritory:TerritoryData[] = [];

  constructor(private netzweltapi: NetzweltApiService, private router: Router, private cookieService: CookieService){
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.cookieService.delete('authenticated');
      }
    });
  }

  ngOnInit() {
    this.cookieService.delete('authenticated');
    this.netzweltapi.getAllTerritories().subscribe((territories) => {
      this.sortedTerritory = territories.data;
    });
  }
}
