import { InputField } from "../ui/input-field";
import { SelectField } from "../ui/select-field";
import { TextAreaField } from "../ui/text-area";
import { useBookingForm } from "../../../hooks/useBookingForm";
import { FormActions } from "./form-action";
import { BookingSuccessModal } from "../success-booking";
import { useState } from "react";
import { BookingFailedModal } from "../failed-booking";

interface Props {
  onClose: () => void;
}

export const BookingForm: React.FC<Props> = ({ onClose }) => {
  const { form, handleChange, handleSubmit } = useBookingForm();
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [queueNumber, setQueueNumber] = useState("");
  const [isFailedOpen, setIsFailedOpen] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await handleSubmit(e);

      const randomQueue = `A-${Math.floor(1000 + Math.random() * 9000)}`;
      setQueueNumber(randomQueue);
      setIsSuccessOpen(true);
    } catch (error) {
      console.error("Booking gagal:", error);
      setIsFailedOpen(true);
    }
  };

  return (
    <>
      <form onSubmit={onSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <InputField
              label="Nama Lengkap"
              name="customerName"
              value={form.customerName}
              onChange={handleChange}
              required
            />
            <InputField
              label="No. Telepon"
              name="customerPhone"
              value={form.customerPhone}
              onChange={handleChange}
              required
            />
            <SelectField
              label="Jenis Kendaraan"
              name="vehicleType"
              value={form.vehicleType}
              onChange={handleChange}
              options={[
                { value: "motor", label: "Motor" },
                { value: "mobil", label: "Mobil" },
              ]}
              required
            />
            <InputField
              label="Plat Nomor"
              name="licensePlate"
              value={form.licensePlate}
              placeholder="B 1234 ABC"
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-4">
            <SelectField
              label="Jenis Servis"
              name="serviceType"
              value={form.serviceType}
              onChange={handleChange}
              options={[
                { value: "servis ringan", label: "Servis Ringan" },
                { value: "servis besar", label: "Servis Besar" },
                { value: "ganti oli", label: "Ganti Oli" },
                { value: "modifikasi", label: "Modifikasi" },
              ]}
              required
            />
            <InputField
              label="Tanggal Booking"
              name="bookingDate"
              type="date"
              value={form.bookingDate}
              onChange={handleChange}
              required
            />
            <SelectField
              label="Waktu Booking"
              name="bookingSlot"
              value={form.bookingSlot}
              onChange={handleChange}
              options={[
                { value: "pagi", label: "Pagi" },
                { value: "siang", label: "Siang" },
                { value: "sore", label: "Sore" },
              ]}
              required
            />
            <TextAreaField
              label="Catatan Tambahan"
              name="notes"
              value={form.notes}
              placeholder="Tambahkan catatan jika ada..."
              onChange={handleChange}
            />
          </div>
        </div>
        <input type="hidden" name="status" value={form.status} />
        <FormActions onClose={onClose} />
      </form>
      <BookingSuccessModal
        isOpen={isSuccessOpen}
        queueNumber={queueNumber}
        onClose={() => setIsSuccessOpen(false)}
      />
      <BookingFailedModal
        isOpen={isFailedOpen}
        onClose={() => setIsFailedOpen(false)}
      />
    </>
  );
};
