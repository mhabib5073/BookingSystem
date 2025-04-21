import { Service } from './service.model';

export interface Booking {
  id: number;
  user: string;
  service: Service;
  booking_date: string;
  status: string;
  created_at: string;
}