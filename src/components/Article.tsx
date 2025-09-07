import { type ReactNode } from "react";
import Sidebar from "./Sidebar";
import FormWrapper from "./FormWrapper";
import { useStateMachine } from "little-state-machine";
import { TEXTS } from "../constants/text";

interface PassedProps {
  form: ReactNode;
}

export default function Article({ form }: PassedProps) {
  const { state } = useStateMachine();
  const { step } = state;
  return (
    <article className="article">
      <Sidebar />
      <FormWrapper
        title={TEXTS[step - 1].title}
        description={TEXTS[step - 1].description}>
        {form}
      </FormWrapper>
    </article>
  );
}
