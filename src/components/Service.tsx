import { useStateMachine } from "little-state-machine";

interface Plan {
  name: string;
  yearly: string;
  monthly: string;
}

const Service = ({ name, yearly, monthly }: Plan) => {
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

export default Service;
