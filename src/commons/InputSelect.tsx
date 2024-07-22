import { useState } from "react";

type InputSelectProps = {
  options: string[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  placeholder: string;
  width?: string;
  value?: string;
  name: string; // Añadir la propiedad name
};

function InputSelect({
  options,
  onChange,
  placeholder,
  width,
  value,
  name, // Añadir la propiedad name
}: InputSelectProps) {
  const [selected, setSelected] = useState(value || "");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(event.target.value);
    onChange(event);
  };

  return (
    <div className="relative w-full">
      <select
        name={name} // Añadir el atributo name al select
        onChange={handleChange}
        value={selected}
        className={`w-${width} bg-white rounded-xl h-[2.8rem] px-2 border border-orange1 outline-none cursor-pointer ${
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
