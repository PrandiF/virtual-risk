import React, { useEffect, useRef } from "react";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Spanish } from "flatpickr/dist/l10n/es.js";

interface DatePickerProps {
  placeholder: string;
  onChange?: (date: Date | Date[]) => void;
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
        dateFormat: "m-y",
        onChange: (selectedDates) => {
          if (onChange) {
            onChange(selectedDates);
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
