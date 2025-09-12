import { Link } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import { routes } from "../constants/routes";
import updateAction from "../state/actions/update-action";

export default function FormButtons() {
  const { state, actions } = useStateMachine({ actions: { updateAction } });

  const handleGoToFinish = () => {
    actions.updateAction({ isFinish: true });
  };

  return (
    <div className="form-buttons">
      {state.step < 4 ? (
        <button
          type="submit"
          form={`step${state.step}-form`}
          className="btn-primary">
          Next Step
        </button>
      ) : (
        <button
          type="button"
          onClick={handleGoToFinish}
          className="btn-secondary">
          Confirm
        </button>
      )}
      {state.step > 1 && (
        <Link
          to={routes[state.step - 1]}
          className="btn-tertiary">
          Go Back
        </Link>
      )}
    </div>
  );
}
