import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CallApiService {


  constructor(public http: HttpClient) { }

  public getAllUser(): Observable<User> {
    return this.http.get<User>(`${environment.apiUrl}User/GetUserAll`)
  }
  public getUserById(id: string): Observable<User> {
    return this.http.get<User>(`${environment.apiUrl}User/GetUserById/${id}`)
  }
  public getUserByUserName(username: string): Observable<User> {
    return this.http.get<User>(`${environment.apiUrl}User/GetUserByUsername/${username}`)
  }
  public CreateUser(user: User): Observable<User> {
    return this.http.post<User>(`${environment.apiUrl}User/CreateUser`, user)
  }
  public UpdateUser(id: string, user: User): Observable<User> {
    return this.http.put<User>(`${environment.apiUrl}User/UpdateUser/${id}`, user)
  }
  public DeleteUser(id: string): Observable<User> {
    return this.http.delete<User>(`${environment.apiUrl}User/DeleteUser/${id}`)
  }

}
