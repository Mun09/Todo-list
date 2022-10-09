function TextInput({ value, setValue, id}) {
  return (
    <input
      id={id}
      value={value}
      type="text"
      onChange={(e) => {
        setValue(e.target.value);
      }}
    />
  );
}

export default TextInput;