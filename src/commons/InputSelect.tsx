import { useState } from "react";

type InputSelectProps = {
  options: string[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  placeholder: string;
  width?: string;
};

function InputSelect({
  options,
  onChange,
  placeholder,
  width,
}: InputSelectProps) {
  const [selected, setSelected] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(event.target.value);
    onChange(event);
  };

  return (
    <div className="relative w-full">
      <select
        onChange={handleChange}
        value={selected}
        className={`w-${width} bg-white rounded-xl py-2 px-2 border border-orange1 outline-none cursor-pointer ${
          selected === "" ? "text-[#b4b9c3]" : "text-black"
        }`}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default InputSelect;
