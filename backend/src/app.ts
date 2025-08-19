import express from "express";
import dotenv from "dotenv";
import BookingRoute from "../src/routes/booking.route";
import corsOptions from "./config/cors";
import cors from "cors";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors(corsOptions));
app.use("/api/bookings", BookingRoute);
export default app;
