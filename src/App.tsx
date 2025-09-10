import { createStore } from "little-state-machine";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
import Step5 from "./components/Step5";
import Article from "./components/Article";
import { routes } from "./constants/routes";
import { initialState } from "./constants/initial-state";

createStore(initialState, { storageType: localStorage, persist: "action" });

const ArticleLayout = () => <Article children={<Outlet />} />;

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<ArticleLayout />}>
          <Route
            index
            element={<Step1 />}
          />
          <Route
            path={routes[2]}
            element={<Step2 />}
          />
          <Route
            path={routes[3]}
            element={<Step3 />}
          />
          <Route
            path={routes[4]}
            element={<Step4 />}
          />
          <Route
            path={routes[5]}
            element={<Step5 />}
          />
        </Route>
      </Routes>
    </Router>
  );
}
