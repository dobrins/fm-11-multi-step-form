import ButtonStartOver from "./ButtonStartOver";

export default function NotFound() {
  return (
    <article className="article article--not-found">
      <div className="form-wrapper form-wrapper--not-found">
        <h1 className="form-wrapper__heading">This page does not exist.</h1>
        <ButtonStartOver style="secondary" />
      </div>
    </article>
  );
}
