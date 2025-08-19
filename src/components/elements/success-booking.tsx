interface Props {
  isOpen: boolean;
  queueNumber: string;
  onClose: () => void;
}

export const BookingSuccessModal: React.FC<Props> = ({
  isOpen,
  queueNumber,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-[90%] max-w-md text-center shadow-lg">
        <h2 className="text-2xl font-bold text-green-600 mb-4">
          Booking Berhasil!
        </h2>
        <p className="text-gray-700 mb-2">
          Terima kasih sudah melakukan booking di{" "}
          <span className="font-semibold">Torque & Tune</span>.
        </p>
        <p className="text-lg font-semibold text-botton">Nomor Antrian Anda:</p>
        <p className="text-3xl font-bold mb-4">{queueNumber}</p>
        <p className="text-sm text-gray-500">
          Mohon <span className="font-semibold">screenshoot</span> nomor antrian
          ini sebagai bukti booking.
        </p>
        <button
          className="mt-6 bg-botton hover:bg-red-700 text-white px-4 py-2 rounded"
          onClick={onClose}
        >
          Tutup
        </button>
      </div>
    </div>
  );
};
