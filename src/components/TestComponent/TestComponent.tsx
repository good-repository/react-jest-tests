import { useState } from "react";

const Qualquer: React.FC = () => {
  const [techs, setTechs] = useState<string[] | []>([]);

  function handleAddTech() {
    setTechs([...techs, "Node.js"]);
  }

  return (
    <div>
      <ul data-testid="tech-list">
        {(techs as any[]).map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <button onClick={handleAddTech}>Add tech</button>
    </div>
  );
};

export default Qualquer;
