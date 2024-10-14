// submit.js
import { useStore } from "./store";

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
});

export const SubmitButton = () => {
  const { nodes, edges } = useStore(selector);
  console.log(nodes, edges);

  const handleSubmit = async () => {
    try {
      const pipelineData = {
        nodes,
        edges,
      };

      const response = await fetch("http://localhost:8000/pipelines/parse", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(pipelineData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log(data);
      alert(`
        Pipeline Created 🥳:
        ----------------------------
        Number of Nodes: ${data.num_nodes}
        Number of Edges: ${data.num_edges}
        Is Directed Acyclic Graph (DAG): ${data.is_dag ? "Yes" : "No"}
      `);
    } catch (error) {
      console.error("Error submitting pipeline:", error);
      alert("Failed to submit the pipeline.");
    }
  };

  return (
    <button
      className={`fixed bottom-4 right-4 px-6 py-2 text-[#FAFAFF] font-semibold rounded-md shadow-lg transition-colors duration-300 ease-in-out 
      ${
        nodes.length === 0
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-[#6366F1] border-[#6366F1] hover:bg-[#4F4FE5] text-[#FAFAFF] cursor-pointer"
      }
    `}
      disabled={nodes.length === 0}
      onClick={handleSubmit}
    >
      Submit Pipeline
    </button>
  );
};
