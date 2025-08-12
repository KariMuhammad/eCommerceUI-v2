type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  required?: boolean;
};

export default function Input({
  label,
  required,
  ...inputAttributes
}: InputProps) {
  return (
    <div>
      {label && (
        <label
          htmlFor={inputAttributes.id}
          className="mt-3 block text-sm font-semibold"
        >
          {label} {required && <sup className="font-bold text-red-500">*</sup>}
        </label>
      )}
      <input
        {...inputAttributes}
        className="mt-1 px-3 py-2 block w-full border border-gray-300 outline-none shadow-sm sm:text-sm"
      />
    </div>
  );
}
