import { useStateMachine } from "little-state-machine";

const Result = () => {
  const { state } = useStateMachine();

  return (
    <div>
      <h1>Result</h1>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
};

export default Result;
