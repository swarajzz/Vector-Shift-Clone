import { NotepadText } from "lucide-react";
import { NodeBase } from "../NodeBase";

export const YoutubeLoader = ({ id, data }) => {
  const fields = [{ name: "url", label: "URL", type: "text" }];

  const handles = [
    { id: "output1", type: "source", position: "right" },
    { id: "output2", type: "target", position: "left" },
  ];

  const infos = [
    {
      label: "Info 1",
      value: "Reads transcript from a YouTube video",
    },
  ];

  return (
    <NodeBase
      id={id}
      data={data}
      icon={NotepadText}
      title="Youtube Loader"
      infos={infos}
      fields={fields}
      handles={handles}
    />
  );
};
