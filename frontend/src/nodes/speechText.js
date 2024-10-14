import { Mic } from "lucide-react";
import { NodeBase } from "../NodeBase";

export const SpeechText = ({ id, data }) => {
  const fields = [
    {
      name: "inputType",
      label: "Model",
      type: "select",
      options: ["OpenAI Whisper", "Deepgram"],
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
      icon={Mic}
      title="Speech to Text"
      fields={fields}
      handles={handles}
    />
  );
};
