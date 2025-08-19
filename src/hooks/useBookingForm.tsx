import process from "process";
import { useState } from "react";
import type { BookingFormData } from "../interfaces/booking-form";
import axios from "axios";

export const useBookingForm = (onSuccess: (queueNumber: string) => void) => {
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
      const apiUrl =
        import.meta.env.VITE_API_URL || process.env.NEXT_PUBLIC_API_URL;

      const res = await axios.post(`${apiUrl}/bookings`, form);
      console.log("Booking berhasil disimpan:", res.data);
      const randomQueue = `TQ-${Math.floor(1000 + Math.random() * 9000)}`;
      onSuccess(randomQueue);
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
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(
        err.response?.data?.message || err.message || "Terjadi kesalahan"
      );
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
