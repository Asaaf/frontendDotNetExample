import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/models/users/user/user';
import { environment } from 'src/environments/environment';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userToken: string | null;

  constructor(private http: HttpClient, private storageService: StorageService) {
    this.userToken = storageService.getItem('token');
    storageService.watchStorage().subscribe(
      resp => {
        this.userToken = storageService.getItem("userToken");
      }
    );
  }

  login(user: User) {
    let url = `${environment.url_api}/auth/local`;
    let body = { identifier: user.email, password: user.pass }
    let headersContent: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${environment.app_token}`
    });
    this.http.post<any>(url, body, { headers: headersContent }).subscribe({
      next: (resp) => {
        this.storageService.setItem("userToken",resp.jwt);
      },
      error: (resp) => {
        console.log(resp);
      }
    });
  }
}
