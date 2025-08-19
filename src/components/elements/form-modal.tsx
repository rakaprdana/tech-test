import { InputField } from "../elements/ui/input-field";
import { SelectField } from "../elements/ui/select-field";
import { TextAreaField } from "../elements/ui/text-area";
import { useBookingForm } from "../../hooks/useBookingForm";
import type { ModalBookingProps } from "../../interfaces/modal";

export const FormModal: React.FC<ModalBookingProps> = ({ isOpen, onClose }) => {
  const { form, handleChange, handleSubmit } = useBookingForm(onClose);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="animate-fadeIn bg-white rounded-2xl shadow-xl w-full max-w-2xl p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition text-xl"
        >
          ✕
        </button>
        <header className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-textBold">Booking Servis</h2>
          <p className="text-sm text-textParagraf mt-1">
            Isi data kendaraan dan pilih jadwal servis
          </p>
        </header>
        <form onSubmit={handleSubmit} className="space-y-6">
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
          <div className="flex justify-end gap-4 pt-6 border-t border-gray-100">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 bg-gray-200 hover:bg-grayCustom text-gray-600 rounded-xl transition"
            >
              Batal
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 bg-gradient-to-r from-botton to-red-700 hover:opacity-90 text-white rounded-xl shadow-md font-semibold transition"
            >
              Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
