import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from '../../services/booking.service';
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent implements OnInit{
  booking = { service_id: 0, booking_date: '' };
  error = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookingService: BookingService,
    private authService: AuthService
  ) { }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.booking.service_id = +params['serviceId'];
    });
  }

  createBooking(): void {
    console.log(this.booking);
   
    this.bookingService.createBooking(this.booking, 'token').subscribe({
      next: () => {
        console.log('Booking created successfully');
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        this.error = 'Failed to create booking';      }
    });
  }
}
