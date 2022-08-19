import React, { useState, useImperativeHandle, forwardRef } from 'react'
import { motion } from 'framer-motion'
import { BackDrop } from '../Backdrop';

interface IProps{
    message?: any;
    children?: any;
}

export const PopUp = forwardRef((props:IProps, ref: any) => {
    let [toggle, settoggle] = useState(false)

    useImperativeHandle(ref, () => ({
        alterToggle(){
            settoggle(!toggle)
        }
    })); 

    const PopContainerStyle: React.CSSProperties = {}
    const PopUpStyle: React.CSSProperties = {
        position: 'absolute',
        width: '400px',
        height: 'auto',
        borderRadius: '40px',
        background: 'linear-gradient(92.83deg, #ffffff64 71.66%, rgba(255, 255, 255, 0.281) 98.26%)',
    }

    const confirmStatus = () => {
        settoggle(!toggle)
    }

    if(toggle) { 
        PopUpStyle.display = 'flex'
        PopUpStyle.zIndex =  10 
        PopContainerStyle.zIndex = 10
    }
    else {PopUpStyle.display = 'none'}

    return (
        <React.Fragment>
            <BackDrop toogle={toggle}/>
            <div className="pop-container" style={PopContainerStyle}>
                    <div className="pop-up" style={PopUpStyle}>
                        <p>{ props.message }</p>
                        <div>{ props.children }</div>
                        <div className="btn" onClick={confirmStatus}>OK</div>
                    </div>
            </div>
        </React.Fragment>
    )
})
