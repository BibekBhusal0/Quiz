import { Select, SelectItem } from "@nextui-org/select";
import React from "react";

function Options({ opt, label, onChange, selected }) {
  return (
    <Select
      labelPlacement="outside-left"
      className="items-center"
      classNames={{
        label: "text-xl capitalize",
      }}
      variant="bordered"
      selectedKeys={[selected ? selected : "any"]}
      label={label}
      onChange={onChange}
      name={label}>
      <SelectItem key={"any"}>Any</SelectItem>
      {opt.map((item) => (
        <SelectItem key={item.id}>{item.name}</SelectItem>
      ))}
    </Select>
  );
}

export default Options;
