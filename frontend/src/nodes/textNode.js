// textNode.js
import { NodeBase } from "../NodeBase";

export const TextNode = ({ id, data }) => {
  const fields = [{ name: "text", label: "Text", type: "text" }];

  const handles = [{ id: "output", type: "source", position: "right" }];

  return (
    <NodeBase
      id={id}
      data={data}
      type="Text"
      fields={fields}
      handles={handles}
    />
  );
};
