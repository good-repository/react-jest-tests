import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function TestForm() {
  const [newTech, setNewTech] = useState<string>("");

  const dispatch = useDispatch();
  //typed state as any just for the test
  //i'm not testing integration here, just the component behavior and methods calls
  const techs = useSelector((state: any) => state.techs);

  function handleAddTech() {
    dispatch({ type: "ADD_TECH", payload: { tech: newTech } });
    setNewTech("");
  }

  return (
    <form data-testid="tech-form" onSubmit={handleAddTech}>
      <ul data-testid="tech-list">
        {(techs as any[]).map((tech) => (
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
