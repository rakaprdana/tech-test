import { BookingStatus } from "./status";

export interface IBooking extends Document {
  customerName: string;
  customerPhone: string;
  vehicleType: "motor" | "mobil";
  licensePlate: string;
  serviceType: "servis ringan" | "servis besar" | "ganti oli" | "modifikasi";
  bookingDate: Date;
  bookingSlot: "pagi" | "siang" | "sore";
  status: BookingStatus;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}
