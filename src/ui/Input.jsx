function Input({ type, placeholder }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="border border-grey px-3 py-2 rounded-lg outline-none w-full focus:border-primary/30 placeholder:font-light"
    />
  );
}

export default Input;
