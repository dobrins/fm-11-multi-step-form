import { useStateMachine } from "little-state-machine";
// import { TEXTS_PLANS } from "../constants/text";

interface Plan {
  name: string;
  yearly: string;
  monthly: string;
}

const Plan = ({ name, yearly, monthly }: Plan) => {
  const { state } = useStateMachine();

  return (
    <label
      className={`plan plan--${name}`}
      htmlFor={name}>
      <div>
        <div className="plan__title">{name}</div>
        <div className="plan__price">${state.yearly ? yearly : monthly}</div>
        {state.yearly && <div className="plan__free">2 months free</div>}
      </div>
    </label>
  );
};

export default Plan;
