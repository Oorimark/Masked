import React, { useContext, useEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { ErrorPage } from "./Error";
import { StartPage } from "./Start/start";
import { Welcome } from "./Welcome/welcome";
import { AnimatePresence } from "framer-motion";
import { CreateLinkPage } from "./Link/create";
import Alert from "../components/Alert";
import { JonLinkPage } from "./Link/join";
import { setFadeOut } from "../util/utilities/fade";
import { AlertContext } from "../components/Alert/Context";

export const RoutedPages: React.FC = () => {
  const alertContext = useContext(AlertContext);
  let keyValue: number = 0;
  useEffect(() => {
    console.log("first");
    console.log(alertContext.alertMsg);
  });
  const location = useLocation();
  const testRef = useRef(null);
  return (
    <AnimatePresence>
      {alertContext.alertMsg
        ? <div className="alert-container">
          {
            alertContext.alertMsg.map(alert => alert.msg ? (
              <Alert status={alert.status} content={alert.msg} key={keyValue++} />
            ): "")
          }
          </div> 
          // alertContext.alertMsg.map((alert) => (
          //   <Alert status={alert.status} content={alert.msg} key={keyValue++}/>
          // ))
        : ""}
      {

      }
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Welcome />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/start" element={<StartPage />} />
        <Route path="/create" element={<CreateLinkPage />} />
        <Route path="/join" element={<JonLinkPage />} />
      </Routes>
    </AnimatePresence>
  );
};

export const ComponentsPages: React.FC = () => {
  return (
    <AnimatePresence>
      <Routes></Routes>
    </AnimatePresence>
  );
};
