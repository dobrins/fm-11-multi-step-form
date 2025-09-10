import { useStateMachine } from "little-state-machine";
import { TEXTS_SIDEBAR } from "../constants/text";

interface SidebarStep {
  step: number;
  title: string;
  active: boolean;
}

export default function Sidebar() {
  const { state } = useStateMachine();

  return (
    <aside className="sidebar">
      {TEXTS_SIDEBAR.map((item, index) => {
        return (
          <SidebarStep
            key={item}
            step={index + 1}
            title={item}
            active={index + 1 === state.step}
          />
        );
      })}
    </aside>
  );
}

// LOCAL COMPONENT

const SidebarStep = ({ step, title, active }: SidebarStep) => {
  return (
    <div className="sidebar-step">
      <div
        className={`sidebar-step__circle${
          active ? " sidebar-step__circle--active" : ""
        }`}>
        {step}
      </div>
      <div className="sidebar-step__step">Step {step}</div>
      <div className="sidebar-step__title">{title}</div>
    </div>
  );
};
