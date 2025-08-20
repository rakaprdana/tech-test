import { useState } from "react";
import type { BookingFormData } from "../interfaces/booking-form";
import axios from "axios";

export const useBookingForm = () => {
  const [form, setForm] = useState<BookingFormData>({
    customerName: "",
    customerPhone: "",
    vehicleType: "",
    licensePlate: "",
    serviceType: "",
    bookingDate: "",
    bookingSlot: "",
    status: "pending",
    notes: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      const res = await axios.post(`${apiUrl}/bookings`, form);

      setForm({
        customerName: "",
        customerPhone: "",
        vehicleType: "",
        licensePlate: "",
        serviceType: "",
        bookingDate: "",
        bookingSlot: "",
        status: "pending",
        notes: "",
      });

      return res.data;
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        const message =
          err.response?.data?.message || err.message || "Terjadi kesalahan";
        setError(message);
        throw new Error(message);
      } else if (err instanceof Error) {
        setError(err.message);
        throw err;
      } else {
        setError("Terjadi kesalahan");
        throw new Error("Terjadi kesalahan");
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    form,
    handleChange,
    handleSubmit,
    setForm,
    loading,
    error,
  };
};
