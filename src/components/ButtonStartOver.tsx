import { useStateMachine } from "little-state-machine";
import updateAction from "../state/actions/update-action";
import { useNavigate } from "react-router-dom";
import { initialState } from "../state/initial-state";
import { routes } from "../constants/routes";

type PassedProps = {
  style?: "primary" | "secondary" | "tertiary";
};

const ButtonStartOver = ({ style = "tertiary" }: PassedProps) => {
  const { actions, state } = useStateMachine({ actions: { updateAction } });
  const navigate = useNavigate();

  async function handleStartOver() {
    actions.updateAction({ isLoading: true });
    await new Promise((r) => setTimeout(r, 500));

    actions.updateAction({ ...initialState, isLoading: false });
    navigate(routes[1]);
  }

  return (
    <button
      type="button"
      disabled={state.isLoading}
      onClick={handleStartOver}
      className={`btn-${style}`}>
      Start over
    </button>
  );
};

export default ButtonStartOver;
