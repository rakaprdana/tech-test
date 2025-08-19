import { Router } from "express";
import { BookingController } from "../controllers/booking.controller";

const route = Router();

route.post("/", BookingController.newBooking);
route.get("/", BookingController.getBooking);

export default route;
