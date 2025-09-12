import ButtonStartOver from "./ButtonStartOver";
import thankYou from "../../public/icon-thank-you.svg";

const ThankYou = () => {
  return (
    <div className="thank-you">
      <img
        src={thankYou}
        width={80}
        height={80}
      />
      <h1 className="thank-you__title">Thank You!</h1>
      <p className="thank-you__description">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at{" "}
        <a href="mailto:support@loremgaming.com">support@loremgaming.com</a>.
      </p>
      <ButtonStartOver />
    </div>
  );
};

export default ThankYou;
