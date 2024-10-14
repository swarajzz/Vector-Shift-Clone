// textNode.js
import { NotebookText } from "lucide-react";
import { NodeBase } from "../NodeBase";

export const Summarizer = ({ id, data }) => {
  const fields = [
    { name: "text", label: "Text", type: "text", textArea: true },
  ];

  const handles = [{ id: "output", type: "source", position: "right" }];

  return (
    <NodeBase
      id={id}
      data={data}
      icon={NotebookText}
      title="Summarizer"
      fields={fields}
      handles={handles}
    />
  );
};
