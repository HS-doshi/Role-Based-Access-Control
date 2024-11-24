import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { registerForm } from '../interface/rbac.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  baseAPI = 'http://localhost:3000/users';

  // return All Data via get method!
  getAll() {
    return this.http.get(this.baseAPI);
  }
  getById(id: number) {
    return this.http.get(this.baseAPI + '/' + id);
  }
  registerData(data: registerForm) {
    return this.http.post(this.baseAPI + '/' + data, data);
  }
}
