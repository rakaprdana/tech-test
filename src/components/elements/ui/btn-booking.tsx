import { useState } from "react";
import { FormModal } from "../form-modal";

export const ButtonBooking = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-4 right-4 bg-botton hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition"
      >
        Booking Sekarang
      </button>
      {/* Modal */}
      <FormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};
