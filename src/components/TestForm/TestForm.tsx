import { useState } from "react";

function TestForm() {
  const [techList, setTechList] = useState<string[] | []>([]);
  const [newTech, setNewTech] = useState<string>("");

  function handleAddTech() {
    setTechList([...techList, "Node.js"]);
    setNewTech("");
  }

  return (
    <form data-testid="tech-form" onSubmit={handleAddTech}>
      <ul data-testid="tech-list">
        {(techList as any[]).map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <label htmlFor="tech">Tech</label>
      <input
        type="text"
        id="tech"
        value={newTech}
        onChange={(evt) => setNewTech(evt.target.value)}
      />
      <button onClick={handleAddTech}>Add tech</button>{" "}
    </form>
  );
}

export default TestForm;
