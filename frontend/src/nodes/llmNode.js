// llmNode.js
import { BrainCircuit } from "lucide-react";
import { NodeBase } from "../NodeBase";

export const LLMNode = ({ id, data }) => {
  // const fields = [];
  const fields = [
    { name: "system", label: "System", type: "text" },
    { name: "prompt", label: "Prompt", type: "text" },
  ];

  const handles = [
    {
      id: "system",
      type: "target",
      position: "left",
      style: { top: `${100 / 3}%` },
    },
    {
      id: "prompt",
      type: "target",
      position: "left",
      style: { top: `${200 / 3}%` },
    },
    { id: "response", type: "source", position: "right" },
  ];

  return (
    <NodeBase
      id={id}
      data={data}
      icon={BrainCircuit}
      title="LLM"
      fields={fields}
      handles={handles}
    />
  );
};
