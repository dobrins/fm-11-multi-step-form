import { useNavigate } from "react-router-dom";

export default function FormButtons() {
  const navigate = useNavigate();

  return (
    <div className="form-buttons">
      <button
        type="submit"
        form="step2-form"
        className="btn-primary">
        Next Step
      </button>
      <button
        type="button"
        className="btn-tertiary"
        onClick={() => navigate("/")}>
        Go Back
      </button>
    </div>
  );
}
