import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Territory } from 'src/models/territories';
import { NetzweltApiService } from 'src/services/netzwelt-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  sortedTerritory: Territory[] = [];

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
      console.log(territories);

      for(let item in territories){
        this.sortedTerritory.push(item);
      }

    });
  }
}
