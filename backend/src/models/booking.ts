import mongoose, { Schema } from "mongoose";
import { IBooking } from "../interfaces/booking";

const BookingSchema: Schema = new Schema<IBooking>(
  {
    customerName: { type: String, required: true },
    customerPhone: { type: String, required: true },
    vehicleType: { type: String, enum: ["motor", "mobil"], required: true },
    licensePlate: { type: String, required: true },
    serviceType: {
      type: String,
      enum: ["servis ringan", "servis besar", "ganti oli", "modifikasi"],
      required: true,
    },
    bookingDate: { type: Date, required: true },
    bookingSlot: {
      type: String,
      enum: ["pagi", "siang", "sore"],
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "confirmed", "completed", "cancelled"],
      default: "pending",
    },
    notes: { type: String },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IBooking>("Booking", BookingSchema);
