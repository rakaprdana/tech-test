interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingFailedModal: React.FC<Props> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-[90%] max-w-md text-center shadow-lg">
        <h2 className="text-2xl font-bold text-botton mb-4">Booking Gagal!</h2>
        <p className="text-gray-700 mb-2">
          Mohon maaf, saat ini layanan sedang{" "}
          <span className="font-semibold">sibuk</span>.
        </p>
        <p className="text-sm text-gray-500">
          Silakan coba lagi beberapa saat nanti.
        </p>
        <button
          className="mt-6 bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded transition"
          onClick={onClose}
        >
          Tutup
        </button>
      </div>
    </div>
  );
};
