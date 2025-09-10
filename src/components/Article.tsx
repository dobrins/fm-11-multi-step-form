import { type ReactNode } from "react";
import Sidebar from "./Sidebar";
import FormWrapper from "./FormWrapper";
import { useStateMachine } from "little-state-machine";
import { TEXTS } from "../constants/text";
import ThankYou from "./ThankYou";

interface PassedProps {
  children: ReactNode;
}

export default function Article({ children }: PassedProps) {
  const { state } = useStateMachine();

  return (
    <article className="article">
      <Sidebar />
      {state.isFinish ? (
        <ThankYou />
      ) : (
        <FormWrapper
          title={TEXTS[state.step - 1].title}
          description={TEXTS[state.step - 1].description}>
          {children}
        </FormWrapper>
      )}
    </article>
  );
}
