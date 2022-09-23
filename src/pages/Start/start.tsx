import React, { useRef } from "react";
import { Button, TransparentButton } from "../../components/Buttons";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Typed from "typed.js";

export class StartPage extends React.Component {
  private el!: HTMLHeadingElement | null;
  typing!: Typed;
  componentDidMount(): void {
    this.typingAnimation();
  }
  componentWillUnmount(): void {
    this.typing.destroy();
  }
  typingAnimation() {
    const texts: Array<string> = [
      "Start a Conversation",
      "No Signing up",
      "Just Chat Anonymously",
    ];
    const element = document.querySelector(".heroText");
    this.typing = new Typed(element || "", {
      strings: texts,
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });
  }
  render(): React.ReactNode {
    return (
      <React.Fragment>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 1, transition: { duration: 2 } }}
          className=" disp-fl-c-d bg-primary h-start-container"
        >
          <div className="background-pattern"></div>
          <div className="start-container">
            <div className="row-custom">
              <div className="header mb-1">
                <h3
                  className="font-white heroText" 
                  ref={(el) => {
                    this.el = el;
                  }}
                ></h3>
              </div>
              <div className="disp-fl-sb btn-container">
                <Link to="/create">
                  <TransparentButton content="Create" width="500px" />
                </Link>
                <Link to="/join">
                  <Button content="Join" width="500px" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </React.Fragment>
    );
  }
}

const WaterMarkStyle: React.CSSProperties = {
  position: "absolute",
};
