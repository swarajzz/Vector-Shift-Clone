import { NodeBase } from "../NodeBase";
import { FileInput } from "lucide-react";

// InputNode.js
export const InputNode = ({ id, data }) => {
  const fields = [
    { name: "inputName", label: "Field Name", type: "text" },
    {
      name: "inputType",
      label: "Type",
      type: "select",
      options: ["Text", "File"],
    },
  ];

  const handles = [{ id: "value", type: "source", position: "right" }];

  return (
    <NodeBase
      id={id}
      data={data}
      title="Input"
      icon={FileInput}
      fields={fields}
      handles={handles}
    />
  );
};
