type InputNumberProps = {
  placeholder?: string;
  width?: string;
  name?: string;
  value?: number;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  readonly?: boolean;
  min?: number;
  step?: string | number;
};

function InputNumber({
  placeholder,
  width,
  name,
  value,
  onChange,
  readonly,
  min = 0, 
  step = "0.01", 
}: InputNumberProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(e);
  };

  return (
    <input
      type="number"
      placeholder={placeholder}
      value={value}
      name={name}
      onChange={handleChange}
      className={`w-${width} bg-white text-black rounded-xl h-[2.8rem] pl-3 border border-orange1 outline-none`}
      readOnly={readonly}
      disabled={readonly}
      min={min}
      step={step}
    />
  );
}

export default InputNumber;
