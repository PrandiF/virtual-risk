import React, { useEffect, useRef } from "react";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { CgCalendarDates } from "react-icons/cg";

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
        className={`w-${width} bg-white text-black rounded-xl py-2 px-3  border border-orange-500 outline-none cursor-pointer`}
      />
      {/* <button
        type="button"
        className="relative right-8 top-3 transform -translate-y-1/2 pointer-events-none"
      >
        <CgCalendarDates className=" text-black w-[18px] h-[18px]" />
      </button> */}
    </div>
  );
};

export default InputDate;
