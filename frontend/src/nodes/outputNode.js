// outputNode.js
import { NodeBase } from "../NodeBase";

export const OutputNode = ({ id, data }) => {
  const fields = [
    { name: "outptuName", label: "Field Name", type: "text" },
    {
      name: "outputType",
      label: "Type",
      type: "select",
      options: ["Text", "File"],
    },
  ];

  const handles = [{ id: "value", type: "source", position: "left" }];

  return (
    <NodeBase
      id={id}
      data={data}
      type="Output"
      fields={fields}
      handles={handles}
    />
  );
};
