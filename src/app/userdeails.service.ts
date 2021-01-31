import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserdeailsService {

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get<UserdeailsService>('/users');
  }

  register(user: UserdeailsService){
    return this.http.post('/user/register', user);
  }

  delete(id: number){
    return this.http.delete('/user/${id}');
  }

}
