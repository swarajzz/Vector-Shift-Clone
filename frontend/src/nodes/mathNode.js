import { Calculator } from "lucide-react";
import { NodeBase } from "../NodeBase";

export const MathNode = ({ id, data }) => {
  const fields = [
    { name: "inputName-1", label: "Value 1", type: "number" },
    { name: "inputName-2", label: "Value 2", type: "number" },

    {
      name: "operation",
      label: "Operation",
      type: "select",
      options: ["Add", "Subtract", "Multiply", "Divide"],
    },
  ];

  const handles = [
    { id: "input1", type: "target", position: "left" },
    { id: "input2", type: "target", position: "left" },
    { id: "result", type: "source", position: "right" },
  ];

  return (
    <NodeBase
      id={id}
      data={data}
      icon={Calculator}
      title="Math"
      fields={fields}
      handles={handles}
    />
  );
};
