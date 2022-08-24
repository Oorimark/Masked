import React from "react";
import { Button, TransparentButton } from "../../components/Buttons";
import { motion } from "framer-motion"
import { Link } from "react-router-dom";

export class StartPage extends React.Component{
    render(): React.ReactNode {
        return (
            <React.Fragment>
                <motion.div
                 initial={{opacity: 0}}
                 animate={{opacity: 1}}
                 exit={{opacity: 1, transition: {duration: 2}}}
                 className=" disp-fl-c-d bg-primary h-start-container">
                <div className="background-pattern"></div>
                <div className="start-container">
                        <div className="row w-100%">
                            <div className="header mb-5">
                                <h3 className="h1 fw-bolder fs-1 text-center font-white ">start a conversation</h3>
                            </div>
                            <div className="container disp-fl-sa w-4">
                                <Link to="/create">
                                <TransparentButton content="Create" width="500px"/>
                                </Link> 
                                <Link to ="/join">
                                <Button content="Join" width="500px" />
                                </Link>
                            </div>
                        </div>
                </div>
                </motion.div>
            </React.Fragment>
        )
    }
}

const WaterMarkStyle: React.CSSProperties = {
    position: 'absolute',
}