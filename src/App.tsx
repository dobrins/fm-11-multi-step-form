import { createStore } from "little-state-machine";
import { AnimatePresence } from "framer-motion";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  useLocation,
} from "react-router-dom";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
import Article from "./components/Article";
import { routes } from "./constants/routes";
import { initialState } from "./state/initial-state";
import NotFound from "./components/NotFound";

createStore(initialState, { storageType: localStorage, persist: "action" });

const ArticleLayout = () => <Article children={<Outlet />} />;

export default function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes
        location={location}
        key={location.pathname}>
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
        </Route>
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </AnimatePresence>
  );
}
