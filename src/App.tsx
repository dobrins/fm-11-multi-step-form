import { createStore } from "little-state-machine";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Result from "./components/Result";
import Article from "./components/Article";

createStore(
  {
    name: "",
    email: "",
    phone: "",
    plan: "",
    step: 1,
    yearly: false,
  },
  { storageType: localStorage, persist: "action" }
);

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Article form={<Step1 />} />}
        />
        <Route
          path="/step2"
          element={<Article form={<Step2 />} />}
        />
        <Route
          path="/result"
          element={<Result />}
        />
      </Routes>
    </Router>
  );
}
