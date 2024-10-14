import { Handle, Position } from "reactflow";
import { memo, useCallback, useState } from "react";
import { CircleX } from "lucide-react";
import TextareaAutosize from "react-textarea-autosize";
import { useStore } from "./store";

export const NodeBase = memo(
  ({ id, data, title, icon: Icon, fields, handles, infos }) => {
    const [state, setState] = useState(data);
    const [variables, setVariables] = useState([]);

    const handleChange = useCallback((field, value) => {
      setState((prevState) => ({
        ...prevState,
        [field]: value,
      }));

      if (field === "text") {
        const foundVariables = extractVariables(value);
        setVariables(foundVariables);
      }
    }, []);

    const removeNode = useStore((state) => state.removeNode);

    const extractVariables = (input) => {
      const regex = /\{\{([^}]+)\}\}/g;
      const matches = new Set();
      let match;

      while ((match = regex.exec(input)) !== null) {
        matches.add(match[1].trim());
      }

      return Array.from(matches);
    };

    return (
      <div className="border border-gray-400 group rounded-md bg-white py-2 shadow-purple transition-all hover:border-[#a9a8f7] hover:shadow-purple-2">
        <div className="mb-2 flex items-center justify-between px-2 text-sm font-semibold text-gray-700">
          <div className="flex items-center justify-center gap-2 text-[#5d7f9e] group-hover:text-[#6563e4]">
            {Icon && <Icon width={18} height={18} />}
            <span>{title}</span>
          </div>
          <div>
            <CircleX
              width={16}
              height={18}
              className="mx-0 cursor-pointer transition hover:text-red-500"
              onClick={() => removeNode(id)}
            />
          </div>
        </div>

        <div className="space-y-2 px-4">
          {fields?.map((field) => (
            <div key={field.name}>
              {field.textArea ? (
                <>
                  <span>{field.label}</span>
                  <TextareaAutosize
                    className="focus:shadow-[0_0_0_2px #6366F1] mt-1 overflow-auto overflow-y-auto overflow-x-hidden rounded-md border border-[#d9d8dd] p-1 text-[#313745] transition hover:border-[#f1f1fe] hover:bg-[#fafaff] focus:bg-transparent focus:outline-none group-hover:text-[#6563e4] block resize w-full cursor-text"
                    onInput={(e) => handleChange(field.name, e.target.value)}
                  ></TextareaAutosize>
                </>
              ) : (
                <>
                  <div>{field.label}</div>

                  {field.type === "text" || field.type === "number" ? (
                    <input
                      className="focus:shadow-[0_0_0_2px #6366F1] p-1 rounded-md border border-[#d9d8dd] text-[#313745] transition hover:border-[#f1f1fe] hover:bg-[#fafaff] focus:bg-transparent focus:outline-none group-hover:text-[#6563e4] min-w-44 w-full"
                      type={field.type}
                      onChange={(e) => handleChange(field.name, e.target.value)}
                    />
                  ) : field.type === "select" ? (
                    <select
                      className="mt-1 rounded-md border border-gray-300 p-1 focus:outline-none group-hover:text-[#6563e4]"
                      onChange={(e) =>
                        handleChange(e, field.name, e.target.value)
                      }
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

        {infos?.length > 0 && (
          <div className="mt-4 border-t pt-2 text-sm text-gray-500">
            {infos.map((info, index) => (
              <div key={index} className="px-4">
                {info.value}
              </div>
            ))}
          </div>
        )}

        {handles.map((handle) => (
          <Handle
            key={handle.id}
            type={handle.type}
            position={handle.position}
            id={`${id}-${handle.id}`}
            style={handle.style}
          />
        ))}

        {/* {variables.map((variable, index) => (
          <Handle
            key={variable}
            type="target"
            position={Position.Left}
            id={`${id}-variable-${variable}`}
            style={{ top: 50 + index * 20 }}
          />
        ))} */}
        {variables.map((variable, index) => (
          <div key={variable} className="relative flex items-center">
            <Handle
              type="target"
              position={Position.Left}
              id={`${id}-variable-${variable}`}
            />
            <span className="ml-4 transition text-[#5d7f9e] group-hover:text-[#6563e4]">
              {variable}
            </span>
          </div>
        ))}
      </div>
    );
  }
);
