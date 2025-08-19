import type { InputFieldProps } from "../../../interfaces/input";

export const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  type = "text",
  value,
  placeholder,
  onChange,
  required = false,
}) => (
  <div className="flex flex-col">
    <label className="text-sm font-semibold text-gray-700 mb-1">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      required={required}
      className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-2.5 text-textBold placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
    />
  </div>
);
