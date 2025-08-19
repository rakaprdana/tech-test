import { BookingForm } from "../forms/booking-form";
import type { ModalBookingProps } from "../../../interfaces/modal";

export const FormModal: React.FC<ModalBookingProps> = ({ isOpen, onClose }) => {
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

        <BookingForm onClose={onClose} />
      </div>
    </div>
  );
};
