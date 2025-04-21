import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Booking } from '../models/booking.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private apiUrl = 'http://localhost:8000/api/bookings/'

  constructor(private http: HttpClient) { }

  getBookings(): Observable<Booking[]>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.http.get<Booking[]>(this.apiUrl, { headers });
    
  }

  createBooking(booking: any, token: string): Observable<Booking> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.http.post<Booking>(this.apiUrl, booking, { headers });
  }

  
  cancelBooking(id: number): Observable<void> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.http.delete<void>(`${this.apiUrl}${id}/`, { headers });
  }
}
