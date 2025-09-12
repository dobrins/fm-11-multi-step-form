import React from "react";
import { useEffect } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useStateMachine, type GlobalState } from "little-state-machine";
import updateAction from "../state/actions/update-action";
import { TEXTS_PLANS } from "../constants/text";
import Plan from "./Plan";
import FormButtons from "./FormButtons";
import { routes } from "../constants/routes";
import { motion } from "framer-motion";

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
  const plan = watch("plan");

  useEffect(() => {
    actions.updateAction({ step: 2 });
  }, [actions]);

  useEffect(() => {
    const planTxt = TEXTS_PLANS.find((p) => p.name === plan);
    const planPrice = planTxt?.[yearly ? "yearly" : "monthly"] ?? 0;
    actions.updateAction({ yearly, planPrice, plan });
  }, [actions, yearly, plan]);

  const onSubmit: SubmitHandler<Step2Inputs> = (data) => {
    actions.updateAction(data);
    navigate(routes[state.step + 1]);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}>
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
      </motion.div>
      <FormButtons />
    </>
  );
};

export default Step2;
