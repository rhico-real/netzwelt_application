import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Territory } from 'src/models/territories';
import { UserResponse, UserParams } from 'src/models/user';

@Injectable({
  providedIn: 'root'
})
export class NetzweltApiService {
  private loginUrl = "login";
  private getTerritoriesUrl = "getAllTerritories";
  private test = "Service";

  constructor(private http: HttpClient) { }

  public login(userParams: UserParams) : Observable<UserResponse>{
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }

    return this.http.post<UserResponse>(`${environment.apiUrl}/${this.loginUrl}`,  JSON.stringify(userParams), httpOptions);
  }

  public getAllTerritories() : Observable<Territory[]>{
    return this.http.get<Territory[]>(`${environment.apiUrl}/${this.getTerritoriesUrl}`);
  }
}
