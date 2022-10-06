import React, { useEffect, useRef, useState, useContext } from "react";
import react from "react";
import { motion } from "framer-motion";
import { Slider } from "../../components/Slide";
import { Logo, LogoFC } from "../../components/Logo";
import { Button, GlassButton } from "../../components/Buttons";
import Image from "../../../public/img/Message sent.png";
import { generate_random_value } from "../../util/generator";
import { PopUp } from "../../components/Pop-Up";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AlertContext } from "../../components/Alert/Context";
import { toggleParameters } from '../../util/utilities/toggle';
import { ClipBoard } from "../../util/utilities/clipboard";
import { AppMenu } from "../../components/Menu";

const CreateLinkPage: React.FC = () => {
  const navigate = useNavigate();
  const alertContext = useContext(AlertContext);
  const [disableButton, setDisableButton] = useState<boolean>(true);
  const togglePopup = useRef<any>(null);
  const startDate = useRef<any>(null);
  const endDate = useRef<any>(null);
  const linkRef = useRef<any>(null);
  const clipboardBtn = useRef<any>(null);

  const ShowAlert = () => {
      if (alertContext.alertMsg) {
        const prev = alertContext.alertMsg;
        alertContext.setAlertMsg([
          ...prev,
          { msg: "Copied link", status: "success" },
        ]);
      }
  }
  const GlassButtonClickExe = () => {
    togglePopup.current.alterToggle()
    const hostname = "http://localhost:3000/create";
    linkRef.current.innerHTML = hostname + "/" + generate_random_value(9);

  };
  const FormExecution = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    GlassButtonClickExe();
    setDisableButton(false);
    console.log(alertContext.alertMsg);
  };
  const Back = () => {
    navigate("/start");
  };
  const CopyClipBoard = () => {
      ClipBoard(document.querySelector("#link")) // copies to clipboard
      clipboardBtn.current.classList.remove("bi-clipboard");
      clipboardBtn.current.classList.add("bi-clipboard-check");
      ShowAlert()
  }

  return (
    <React.Fragment>
      <AppMenu position="bottom" />
      <PopUp ref={togglePopup}>
        <div className="clipboard--container">
          <div className="clipboard m-2">
            <i className="bi bi-link-45deg"></i>
            <div className="link" id="link" ref={linkRef}></div>
            <i
              className="bi bi-clipboard"
              ref={clipboardBtn}
              onClick={CopyClipBoard}
            ></i>
          </div>
        </div>
      </PopUp>

      <div className="bg-primary create-link-page">
        <nav>
          <LogoFC position="right" />
          <div className="back" onClick={Back}>
            <i className="bi bi-chevron-left"></i> Back
          </div>
        </nav>
        <main>
          <section>
            <header>
              <h3>Create Link</h3>
              <span className="join">
                <Link to="/join">Join with link</Link>
              </span>
            </header>
            <form action="" onSubmit={FormExecution}>
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter display name"
              />
              <div className="disp-fl-sb">
                <input
                  type="time"
                  name=""
                  id=""
                  placeholder="Conversation time (eg: 11:30)"
                  max={5}
                  ref={startDate}
                />
                <input
                  type="time"
                  name=""
                  placeholder="Conversation time (eg: 11:30)"
                  max={5}
                  ref={endDate}
                />
              </div>
              <input
                className="glass-btn"
                type="submit"
                value="generate token"
              />
              <Button
                content="Go To Room"
                disable={disableButton}
                url="/chat"
              />
            </form>
          </section>
          <div className="img">
            <img src={Image} alt="" />
          </div>
        </main>
        <motion.aside className="slider">
          <Slider
            background="red"
            width="30%"
            right="0"
            animate={false}
          ></Slider>
        </motion.aside>
      </div>
    </React.Fragment>
  );
};
export default React.memo(CreateLinkPage)
