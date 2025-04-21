import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/services/booking.service';
import { ServiceService } from 'src/app/services/service.service';
import { Booking } from 'src/app/models/booking.model';
import { Service } from 'src/app/models/service.model';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  bookings: Booking[] = [];
  services: Service[] = [];
  newService = {id: 0, name: '', description: '', price: 0, created_at: ''};

  constructor (private bookingService: BookingService, 
  private serviceService: ServiceService) { }

  ngOnInit(): void {
    this.bookingService.getBookings().subscribe((data) => {
      this.bookings = data;
      
    });
    this.serviceService.getServices().subscribe((data) => {
      this.services = data;

    });
  }

 
  createService(): void {
    this.serviceService.createService(this.newService).subscribe((service) => {
      this.services.push(service);
      this.newService = {id: 0, name: '', description: '', price: 0, created_at: '' };
    });
  }
}
