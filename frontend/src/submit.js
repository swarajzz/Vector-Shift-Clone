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
      console.log(response)

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log(data);
      alert(`
        Pipeline Analysis Result:
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

  return <button onClick={handleSubmit}>Submit Pipeline</button>;
};
