import { Request, Response } from "express";
import { BookingService } from "../services/booking.service";
import { responses } from "../constants";
import mongoose from "mongoose";

export class BookingController {
  static newBooking = async (req: Request, res: Response) => {
    try {
      const newItem = await BookingService.createBooking(req.body);
      res.status(201).json({
        success: true,
        message: responses.successCreateItem,
        newItem,
      });
    } catch (error: unknown) {
      if (error instanceof mongoose.Error.ValidationError) {
        const message = Object.values(error.errors).map((err) => err.message);
        res.status(400).json({
          success: false,
          message: responses.errorCreateItem,
          error: message,
        });
      }
      res.status(500).json({
        success: false,
        message: responses.serverError,
        error: error,
      });
    }
  };

  static getBooking = async (req: Request, res: Response) => {
    try {
      const item = await BookingService.getBooking();
      if (item.length === 0) {
        res.status(404).json({
          success: false,
          message: responses.errorNotFound,
        });
        return;
      }
      res.status(200).json({
        success: true,
        message: responses.successGetItem,
        count: item.length,
        data: item,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: responses.serverError,
        error: error,
      });
    }
  };
}
