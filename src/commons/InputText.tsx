type InputTextProps = {
  placeholder?: string;
  width?: string;
  name?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  readonly?: boolean;
};

function InputText({
  placeholder,
  width,
  name,
  value,
  onChange,
  readonly,
}: InputTextProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(e);
  };
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      name={name}
      onChange={handleChange}
      className={`w-${width} bg-white text-black rounded-xl h-[2.8rem] pl-3 border border-orange1 outline-none`}
      readOnly={readonly}
      disabled={readonly}
    />
  );
}

export default InputText;
