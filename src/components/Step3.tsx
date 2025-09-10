import { useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useStateMachine, type GlobalState } from "little-state-machine";
import updateAction from "./updateAction";
import { useEffect } from "react";
import FormButtons from "./FormButtons";
import { TEXTS_ADD_ONS } from "../constants/text";
import { routes } from "../constants/routes";

type Step3Inputs = Pick<GlobalState, "services" | "storage" | "profile">;

type TService = {
  name: string;
  description: string;
  price: string;
};

const Step3 = () => {
  const { actions, state } = useStateMachine({ actions: { updateAction } });

  const { register, handleSubmit } = useForm<Step3Inputs>({
    defaultValues: {
      services: state.services,
      storage: state.storage,
      profile: state.profile,
    },
  });

  const navigate = useNavigate();

  useEffect(() => {
    actions.updateAction({ step: 3 });
  }, [actions]);

  const onSubmit: SubmitHandler<Step3Inputs> = (data) => {
    actions.updateAction(data);
    navigate(routes[state.step + 1]);
  };

  return (
    <>
      <form
        className="form form--small-gap"
        id="step3-form"
        onSubmit={handleSubmit(onSubmit)}>
        {TEXTS_ADD_ONS.map((item) => {
          return (
            <label
              key={item.id}
              htmlFor={item.id}
              className="add-ons-container">
              <input
                {...register(item.id)}
                type="checkbox"
                id={item.id}
              />
              <Service
                name={item.name}
                description={item.description}
                price={
                  state.yearly ? `+${item.yearly}/yr` : `+${item.monthly}/mo`
                }
              />
            </label>
          );
        })}
      </form>
      <FormButtons />
    </>
  );
};

export default Step3;

// LOCAL COMPONENT

const Service = ({ name, description, price }: TService) => {
  return (
    <div className="service">
      <div className="service__title">{name}</div>
      <div className="service__description">{description}</div>
      <div className="service__price">{price}</div>
    </div>
  );
};
