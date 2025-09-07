import { useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";
import type { GlobalState } from "little-state-machine";
import { useEffect } from "react";

type Step1Inputs = Pick<GlobalState, "name" | "email" | "phone" | "step">;

const Step1 = () => {
  const { state, actions } = useStateMachine({
    actions: { updateAction },
  });
  const navigate = useNavigate();

  useEffect(() => {
    actions.updateAction({ step: 1 });
  }, [actions]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Step1Inputs>({
    defaultValues: {
      name: state.name ?? "",
      email: state.email ?? "",
      phone: state.phone ?? "",
      step: 1,
    },
    mode: "all",
  });

  const onSubmit: SubmitHandler<Step1Inputs> = (data) => {
    actions.updateAction(data);
    navigate("/step2");
  };

  return (
    <>
      <form
        id="step1-form"
        className="form"
        onSubmit={handleSubmit(onSubmit)}
        noValidate>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          {errors.name?.message && (
            <span
              role="alert"
              className="error">
              {errors.name?.message}
            </span>
          )}
          <input
            {...register("name", {
              required: "Name is required",
            })}
            placeholder="name"
            autoComplete="name"
            id="name"
          />
        </div>

        <div className="form-control">
          <label htmlFor="email">Email address</label>
          {errors.email?.message && (
            <span
              role="alert"
              className="error">
              {errors.email?.message}
            </span>
          )}
          <input
            {...register("email", { required: "Email is required" })}
            type="email"
            placeholder="email"
            id="email"
          />
        </div>

        <div className="form-control">
          <label htmlFor="phone">Phone number</label>
          <input
            {...register("phone")}
            type="tel"
            placeholder="phone"
            autoComplete="tel"
            id="phone"
          />
        </div>
      </form>

      <div className="form-buttons">
        <button
          type="submit"
          form="step1-form"
          className="btn-primary">
          Next Step
        </button>
      </div>
    </>
  );
};

export default Step1;
