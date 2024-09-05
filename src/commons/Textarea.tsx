type TextareaProps = {
  placeholder?: string;
  width?: string;
  name?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  readonly?: boolean;
};

function Textarea({
  placeholder,
  width,
  name,
  value,
  onChange,
  readonly,
}: TextareaProps) {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (onChange) onChange(e);
  };

  return (
    <textarea 
      placeholder={placeholder}
      value={value}
      name={name}
      onChange={handleChange}
      className={`w-${width} bg-white text-black rounded-xl h-[8rem] pl-3 border border-orange1 outline-none`}
      readOnly={readonly}
      disabled={readonly}
    />
  );
}

export default Textarea;
