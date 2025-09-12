import { useEffect } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "../state/actions/update-action";
import FormButtons from "./FormButtons";
import { zodResolver } from "@hookform/resolvers/zod";
import { step1Schema, type Step1Inputs } from "../lib/step1Schema";
import { routes } from "../constants/routes";
import { motion } from "framer-motion";

const Step1 = () => {
  const { state, actions } = useStateMachine({ actions: { updateAction } });
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors },
  } = useForm<Step1Inputs>({
    defaultValues: {
      name: state.name ?? "",
      email: state.email ?? "",
      phone: state.phone ?? "",
      step: 1,
    },
    mode: "onChange",
    resolver: zodResolver(step1Schema),
  });

  const onSubmit: SubmitHandler<Step1Inputs> = (data) => {
    actions.updateAction(data);
    navigate(routes[state.step + 1]);
  };

  useEffect(() => {
    actions.updateAction({ step: 1 });
  }, [actions]);

  useEffect(() => {
    setFocus("name");
  }, [setFocus]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}>
        <form
          id="step1-form"
          className="form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate>
          <div
            className={
              errors.name ? "form-control form-control--error" : "form-control"
            }>
            <label htmlFor="name">Name</label>
            {errors.name?.message && (
              <span
                id="name-error"
                role="alert"
                className="error">
                {errors.name.message}
              </span>
            )}
            <input
              id="name"
              placeholder="e.g. Stephen King"
              autoComplete="name"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
              {...register("name")}
            />
          </div>

          <div
            className={
              errors.email ? "form-control form-control--error" : "form-control"
            }>
            <label htmlFor="email">Email address</label>
            {errors.email?.message && (
              <span
                id="email-error"
                role="alert"
                className="error">
                {errors.email.message}
              </span>
            )}
            <input
              id="email"
              type="email"
              placeholder="e.g. stephenking@lorem.com"
              autoComplete="email"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
              {...register("email")}
            />
          </div>

          <div
            className={
              errors.phone ? "form-control form-control--error" : "form-control"
            }>
            <label htmlFor="phone">Phone number</label>
            {errors.phone?.message && (
              <span
                id="phone-error"
                role="alert"
                className="error">
                {errors.phone.message}
              </span>
            )}
            <input
              id="phone"
              type="tel"
              inputMode="tel"
              placeholder="e.g. +1 234 567 890"
              autoComplete="tel"
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? "phone-error" : undefined}
              {...register("phone")}
            />
          </div>
        </form>
      </motion.div>
      <FormButtons />
    </>
  );
};

export default Step1;
