import { IBooking } from "../interfaces/booking";
import booking from "../models/booking";

export class BookingService {
  static createBooking = async (data: IBooking) => {
    const newBooking = new booking({ ...data });
    return await newBooking.save();
  };
  static getBooking = async () => {
    const item = await booking.find();
    return item;
  };
}
