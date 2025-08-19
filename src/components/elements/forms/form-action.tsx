interface Props {
  onClose: () => void;
}

export const FormActions: React.FC<Props> = ({ onClose }) => (
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
);
