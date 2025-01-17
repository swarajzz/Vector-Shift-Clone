// textNode.js
import { NotepadText } from "lucide-react";
import { NodeBase } from "../NodeBase";

export const TextNode = ({ id, data }) => {
  const fields = [
    { name: "text", label: "Text", type: "text", textArea: true },
  ];

  const handles = [{ id: "output", type: "source", position: "right" }];

  return (
    <NodeBase
      id={id}
      data={data}
      icon={NotepadText}
      title="Text"
      fields={fields}
      handles={handles}
    />
  );
};
