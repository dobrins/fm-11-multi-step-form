import { useEffect } from "react";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";

const Step5 = () => {
  const { actions, state } = useStateMachine({ actions: { updateAction } });

  useEffect(() => {
    actions.updateAction({ step: 5 });
  }, [actions]);

  return (
    <div>
      <h1>Result</h1>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
};

export default Step5;
