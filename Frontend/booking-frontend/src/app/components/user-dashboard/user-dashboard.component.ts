import { Component, OnInit} from '@angular/core';
import { BookingService } from 'src/app/services/booking.service';
import { Booking } from 'src/app/models/booking.model';


@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  bookings: Booking[] = [];

  constructor (private bookingService: BookingService) {}

  ngOnInit(): void {
      this.bookingService.getBookings().subscribe((data) => {
        this.bookings = data;
      })
  }

  cancelBooking(id: number): void {
    this.bookingService.cancelBooking(id).subscribe((data) => {
      this.bookings = this.bookings.filter(b => b.id !== id);
    })
  }
}
