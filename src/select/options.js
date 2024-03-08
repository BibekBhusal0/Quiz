import React from "react";

function Options({ opt, label, onChange }) {
  return (
    <div className="text-lg col-span-4 sm:col-span-2 xl:col-span-1">
      <label className=" capitalize pr-4" htmlFor={label}>
        {label}
      </label>
      <select onChange={onChange} name={label}>
        <option value={undefined}>Any</option>
        {opt.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Options;
