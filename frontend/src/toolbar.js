// toolbar.js

import { DraggableNode } from "./draggableNode";

export const PipelineToolbar = () => {
  return (
    <div style={{ padding: "10px" }}>
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        <DraggableNode type="customInput" label="Input" />
        <DraggableNode type="llm" label="LLM" />
        <DraggableNode type="customOutput" label="Output" />
        <DraggableNode type="text" label="Text" />
        <DraggableNode type="math" label="Math" />
        <DraggableNode type="youtubeLoader" label="YoutubeLoader" />
        <DraggableNode type="speechText" label="SpeechText" />
        <DraggableNode type="splitText" label="SplitText" />
        <DraggableNode type="summarizer" label="Summarizer" />
      </div>
    </div>
  );
};
