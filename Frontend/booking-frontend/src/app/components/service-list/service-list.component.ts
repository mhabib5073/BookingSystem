import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { Service } from '../../models/service.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {
  services: Service[] = []

  constructor (private serviceService: ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.serviceService.getServices().subscribe((data) => {
      this.services = data;
    });
  }

  bookService(serviceId: number): void {
    this.router.navigate(['/book'], { queryParams: { serviceId } });
  }
}
