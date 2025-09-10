import { type ReactNode } from "react";

interface PassedProps {
  title?: string;
  description?: string;
  children: ReactNode;
}

export default function FormWrapper({
  title,
  description,
  children,
}: PassedProps) {
  return (
    <section className="form-wrapper">
      {(title || description) && (
        <div>
          <h1 className="form-wrapper__heading">{title}</h1>
          <p className="form-wrapper__description">{description}</p>
        </div>
      )}
      {children}
    </section>
  );
}
