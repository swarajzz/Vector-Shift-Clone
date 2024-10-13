import { Handle, Position } from "reactflow";
import { useState } from "react";

export const NodeBase = ({ id, data, type, icon: Icon, fields, handles }) => {
  console.log("HEy");
  const [state, setState] = useState(data);
  const handleChange = (field, value) => {
    setState((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  return (
    // <div className="p-4 w-[200px] h-[100px] border border-gray-300 bg-white shadow-md rounded-md">
    <div className="px-4 py-2 shadow-md rounded-md bg-white border-2 border-stone-400">
      {/* <div className="mb-2 text-sm font-semibold text-gray-700"><Icon /></div> */}
      <div className="flex items-center mb-2 text-sm font-semibold text-gray-700">
        {Icon && <Icon width={18} height={18} />}
        <span>{type}</span>
      </div>
      <div className="space-y-2">
        {fields.map((field) => (
          <label
            key={field.name}
            className="flex flex-col text-sm text-gray-600"
          >
            {field.label}:
            {field.type === "text" ? (
              <input
                className="mt-1 p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                type="text"
                value={state[field.name]}
                onChange={(e) => handleChange(field.name, e.target.value)}
              />
            ) : field.type === "select" ? (
              <select
                className="mt-1 p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={state[field.name]}
                onChange={(e) => handleChange(field.name, e.target.value)}
              >
                {field.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : null}
          </label>
        ))}
      </div>
      {handles.map((handle) => (
        <Handle
          key={handle.id}
          type={handle.type}
          position={handle.position}
          id={`${id}-${handle.id}`}
          style={handle.style}
          className="w-2 h-2 bg-blue-500"
        />
      ))}
    </div>
  );
};
