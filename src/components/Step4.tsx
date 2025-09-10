import { useStateMachine } from "little-state-machine";
import { Link } from "react-router-dom";
import updateAction from "./updateAction";
import { useEffect } from "react";
import FormButtons from "./FormButtons";
import { TEXTS_ADD_ONS } from "../constants/text";
import { routes } from "../constants/routes";

const Step4 = () => {
  const { actions, state } = useStateMachine({ actions: { updateAction } });
  const { plan, planPrice, yearly, storage, profile, services } = state;

  const PERIOD_TXT = yearly ? "/yr" : "/mo";
  const TOTAL_PER_TXT = yearly ? "per year" : "per month";

  useEffect(() => {
    actions.updateAction({ step: 4 });
  }, [actions]);

  const priceServices = services
    ? yearly
      ? TEXTS_ADD_ONS[0].yearly
      : TEXTS_ADD_ONS[0].monthly
    : 0;
  const priceStorage = services
    ? yearly
      ? TEXTS_ADD_ONS[1].yearly
      : TEXTS_ADD_ONS[1].monthly
    : 0;
  const priceProfile = profile
    ? yearly
      ? TEXTS_ADD_ONS[2].yearly
      : TEXTS_ADD_ONS[2].monthly
    : 0;

  const total = state.planPrice + priceStorage + priceServices + priceProfile;

  return (
    <>
      <div className="summary-container">
        <div className="summary">
          <div>
            <div className="summary__accent">
              <span className="summary__title">
                {plan} ({yearly ? `yearly` : `monthly`})
              </span>
            </div>
            <Link
              to={routes[2]}
              className="summary__link">
              Change
            </Link>
          </div>
          <div className="summary__accent">
            ${planPrice}
            {PERIOD_TXT}
          </div>
          <hr />
          {services && (
            <>
              <div>{TEXTS_ADD_ONS[0].name}</div>
              <div className="summary__add-on-price">
                +${yearly ? TEXTS_ADD_ONS[0].yearly : TEXTS_ADD_ONS[0].monthly}
                {PERIOD_TXT}
              </div>
            </>
          )}
          {storage && (
            <>
              <div>{TEXTS_ADD_ONS[1].name}</div>
              <div className="summary__add-on-price">
                +${yearly ? TEXTS_ADD_ONS[1].yearly : TEXTS_ADD_ONS[1].monthly}
                {PERIOD_TXT}
              </div>
            </>
          )}
          {profile && (
            <>
              <div>{TEXTS_ADD_ONS[2].name}</div>
              <div className="summary__add-on-price">
                +${yearly ? TEXTS_ADD_ONS[2].yearly : TEXTS_ADD_ONS[2].monthly}
                {PERIOD_TXT}
              </div>
            </>
          )}
        </div>
        <div className="summary summary--total">
          <div>Total ({TOTAL_PER_TXT})</div>
          <div className="summary__total">
            +${total}
            {PERIOD_TXT}
          </div>
        </div>
      </div>
      <FormButtons />
    </>
  );
};

export default Step4;
