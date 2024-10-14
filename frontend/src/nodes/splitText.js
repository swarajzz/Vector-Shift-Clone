import { Split } from "lucide-react";
import { NodeBase } from "../NodeBase";

export const SplitText = ({ id, data }) => {
  const fields = [
    {
      name: "inputType",
      label: "Delimeter ",
      type: "select",
      options: ["newline", "space", "character(s)"],
    },
  ];

  const handles = [
    { id: "output1", type: "source", position: "right" },
    { id: "output2", type: "target", position: "left" },
  ];

  return (
    <NodeBase
      id={id}
      data={data}
      icon={Split}
      title="Split Text"
      fields={fields}
      handles={handles}
    />
  );
};
