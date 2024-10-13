import { Handle, Position } from "reactflow";
import { useState } from "react";
import { CircleX } from "lucide-react";

export const NodeBase = ({ id, data, type, icon: Icon, fields, handles }) => {
  const [state, setState] = useState(data);
  const handleChange = (field, value) => {
    setState((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  return (
    <div className="border border-gray-400 group rounded-md bg-white py-2 shadow-purple transition-all hover:border-[#a9a8f7] hover:shadow-purple-2">
      <div className="mb-2 flex items-center justify-between px-2 text-sm font-semibold text-gray-700">
        <div className="flex items-center justify-center gap-2 text-[#5d7f9e] group-hover:text-[#6563e4]">
          {Icon && <Icon width={18} height={18} />}
          <span>{type}</span>
        </div>
        <div>
          <CircleX
            width={16}
            height={18}
            className="mx-0 cursor-pointer transition hover:text-red-500"
          />
        </div>
      </div>

      <div className="space-y-2 px-4">
        {fields.map((field) => (
          <div key={field.name}>
            {field.textArea ? (
              <>
                <span>{field.label}</span>
                <textarea
                  className="focus:shadow-[0_0_0_2px #6366F1] mt-1 overflow-auto overflow-y-auto overflow-x-hidden rounded-md border border-[#d9d8dd] p-1 text-[#313745] transition hover:border-[#f1f1fe] hover:bg-[#fafaff] focus:bg-transparent focus:outline-none group-hover:text-[#6563e4] block resize w-full cursor-text"
                  onInput={(e) =>
                    handleChange(field.name, e.currentTarget.textContent)
                  }
                ></textarea>
              </>
            ) : (
              <>
                <div>{field.label}</div>

                {field.type === "text" ? (
                  <input
                    className="focus:shadow-[0_0_0_2px #6366F1] p-1 rounded-md border border-[#d9d8dd] text-[#313745] transition hover:border-[#f1f1fe] hover:bg-[#fafaff] focus:bg-transparent focus:outline-none group-hover:text-[#6563e4] min-w-44"
                    type="text"
                    onChange={(e) => handleChange(field.name, e.target.value)}
                  />
                ) : field.type === "select" ? (
                  <select
                    className="mt-1 rounded-md border border-gray-300 p-1 focus:outline-none group-hover:text-[#6563e4]"
                    onChange={(e) => handleChange(field.name, e.target.value)}
                  >
                    {field.options.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) : null}
              </>
            )}
          </div>
        ))}
      </div>

      {handles.map((handle) => (
        <Handle
          key={handle.id}
          type={handle.type}
          position={handle.position}
          id={`${id}-${handle.id}`}
          style={handle.style}
          className="h-2 w-2 bg-blue-500"
        />
      ))}
    </div>
  );
};
