import React, { useEffect } from 'react';
import  Masked_logo from '/img/logo -  rounded.png'
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Welcome: React.FC = () => {
        // navigate to the start page after some time
        const navigation = useNavigate();

        useEffect(() => {
            setTimeout(() => {
                navigation("/start")
            }, 9000);
        }, [])

        return(
            <React.Fragment>
                <motion.div
                 className="Welcome_page"
                 initial={{opacity: 0}}
                 animate={{opacity: 1}}
                 exit={{opacity: 1}}
                 >
                    <div className="loading">
                    </div>
                    <img src={Masked_logo} alt="" />
                </motion.div>
            </React.Fragment>
        )
}
