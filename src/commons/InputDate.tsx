// InputDate.tsx
import React, { useEffect, useRef } from "react";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Spanish } from "flatpickr/dist/l10n/es.js";

interface DatePickerProps {
  placeholder: string;
  onChange?: (date: string) => void;
  width?: string;
}

const InputDate: React.FC<DatePickerProps> = ({
  placeholder,
  onChange,
  width,
}) => {
  const datePickerRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (datePickerRef.current) {
      flatpickr(datePickerRef.current, {
        locale: Spanish,
        dateFormat: "d-m-y", // Cambié el formato de fecha a día-mes-año
        onChange: (selectedDates) => {
          if (onChange && selectedDates.length > 0) {
            const formattedDate = selectedDates[0].toISOString().split('T')[0]; // Convierte la fecha a string
            onChange(formattedDate);
          }
        },
      });
    }
  }, [onChange]);

  return (
    <div className="relative w-full">
      <input
        type="text"
        ref={datePickerRef}
        placeholder={placeholder}
        className={`w-${width} bg-white text-black rounded-xl py-2 px-3 border border-orange-500 outline-none cursor-pointer`}
      />
    </div>
  );
};

export default InputDate;
