import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
userUrl: string = 'https://accedo-video-app-api.herokuapp.com/users';
createUserUrl: string = 'https://accedo-video-app-api.herokuapp.com/signup';
httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
  constructor(private http: HttpClient) { }


getUsers(): Observable<any>{
  return this.http.get(this.userUrl);
}

createUser(data): Observable<any>{
  console.log(data);
  return this.http.post<any>(this.createUserUrl, data, this.httpOptions )
}

}