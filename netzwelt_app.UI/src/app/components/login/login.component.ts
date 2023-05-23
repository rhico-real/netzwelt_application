import { Component, Input } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { UserParams } from 'src/models/user';
import { NetzweltApiService } from 'src/services/netzwelt-api.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Input() user?:UserParams;
  showErrorDialog = false;

  constructor(private netzweltapi: NetzweltApiService, private router: Router, private cookieService: CookieService){
    this.user = {
      username: "",
      password: ""
    }

    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.cookieService.delete('authenticated');
      }
    });
  }

  ngOnInit() {
    this.cookieService.delete('authenticated');
  }

  click(){
    this.showErrorDialog = false;
    this.netzweltapi.login(this.user!).subscribe(
      (data) => {
        this.router.navigate(['/home/index']);

        this.cookieService.set('authenticated', 'true');
      },
      (error) => {
        console.log(error);
        this.showErrorDialog = true;
      });
  }
}
