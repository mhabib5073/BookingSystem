import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  getToken(): string {
    throw new Error('Method not implemented.');
  }
  private apiUrl = 'http://localhost:8000/api/auth/login/';

  constructor(private http: HttpClient) { }

  login(credentials: { username: string; password: string }): Observable<any> {
    return this.http.post<any>(this.apiUrl, credentials).pipe(
      tap(res => {
        localStorage.setItem('token', res['access']);
      })
    );
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  isAdmin(): boolean {
    return true; // Simplified for demo
  }
  
  logout(): void {
    localStorage.removeItem('token');
  }
}
