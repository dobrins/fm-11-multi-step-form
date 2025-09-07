import React from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";
import type { GlobalState } from "little-state-machine";
import { useEffect } from "react";
import { TEXTS_PLANS } from "../constants/text";
import Plan from "./Plan";
import FormButtons from "./FormButtons";

type Step2Inputs = Pick<GlobalState, "plan" | "step" | "yearly">;

const Step2 = () => {
  const { actions, state } = useStateMachine({ actions: { updateAction } });

  const { register, handleSubmit, watch } = useForm<Step2Inputs>({
    defaultValues: {
      yearly: state.yearly ?? false,
      plan: state.plan ?? "arcade",
    },
  });
  const navigate = useNavigate();
  const yearly = watch("yearly");

  useEffect(() => {
    actions.updateAction({ step: 2 });
  }, [actions]);

  useEffect(() => {
    actions.updateAction({ yearly });
  }, [actions, yearly]);

  const onSubmit: SubmitHandler<Step2Inputs> = (data) => {
    actions.updateAction(data);
    navigate("/result");
  };

  return (
    <>
      <form
        className="form"
        id="step2-form"
        onSubmit={handleSubmit(onSubmit)}>
        <div
          className="plans"
          role="radiogroup"
          aria-labelledby="queryTypeLegend">
          {TEXTS_PLANS.map((item) => {
            return (
              <React.Fragment key={item.name}>
                <input
                  type="radio"
                  value={item.name}
                  id={item.name}
                  {...register("plan")}
                />
                <Plan {...item} />
              </React.Fragment>
            );
          })}
        </div>
        <div className="yearly">
          <label
            className="switch"
            htmlFor="yearly">
            <input
              id="yearly"
              type="checkbox"
              {...register("yearly")}
            />
            <div></div>
          </label>
          <label
            htmlFor="yearly"
            className={`yearly__monthly ${yearly ? "yearly__inactive" : ""}`}>
            Monthly
          </label>
          <label
            htmlFor="yearly"
            className={`yearly__yearly ${!yearly ? "yearly__inactive" : ""}`}>
            Yearly
          </label>
        </div>
      </form>
      <FormButtons />
    </>
  );
};

export default Step2;
