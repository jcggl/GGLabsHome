import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./reset.css";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { NavigationProvider } from "@/contexts/NavigationContext";
import ReactGA from "react-ga";
import { TechHeightProvider } from "./contexts/TechHeightContext";
import { RecoilRoot } from "recoil";
import { CookiesProvider } from "react-cookie";

ReactGA.initialize("UA-217346279-2");

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <CookiesProvider>
      <RecoilRoot>
        <NavigationProvider>
          <TechHeightProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </TechHeightProvider>
        </NavigationProvider>
      </RecoilRoot>
    </CookiesProvider>
  </React.StrictMode>
);

reportWebVitals();
