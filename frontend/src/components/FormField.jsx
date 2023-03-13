import React from 'react';

const FormField = ({
  labelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
}) => (
  <div>
    <div className="flex items-center   gap-2 mb-2">
      <label
        htmlFor={name}
        className="block text-2xl  lg:text-5xl font-prompt text-white"
      >
        {labelName}
      </label>
      {isSurpriseMe && (
        <button
          type="button"
          onClick={handleSurpriseMe}
          className=" text-xs bg-transparent/10 hover:bg-transparent/40 py-1 px-2 rounded-[5px] transition-all hover:scale-110 text-white font-extralight lg:text-lg lg:px-2  "
        >
          Try Prompts
        </button>
      )}
    </div>
    <input
      type={type}
      id={name}
      name={name}
      className="bg-transparent/10 text-white focus:bg-transparent/40 border border-white  text-sm rounded-lg focus:ring-pink-400 focus:border-pink-400 outline-none block w-full p-3"
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      required
    />
  </div>
);

export default FormField;