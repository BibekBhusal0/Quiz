import React from "react";

function Options({ opt, label, onChange }) {
  return (
    <div>
      <label className=" capitalize" htmlFor={label}>
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
