import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChannelService {

  constructor(private http: HttpClient) { }

  getAll(): Promise<any> {
    return this.http.get(`${environment.apiUrl}channel`).toPromise();
  }

  add(data): Promise<any> {
    return this.http.post(`${environment.apiUrl}channel`, data).toPromise();
  }
}
