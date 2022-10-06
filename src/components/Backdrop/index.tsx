import React from 'react'
import { motion } from 'framer-motion'

interface IProps{
    toggle: boolean
}
export const BackDrop: React.FC<IProps> = (props: IProps) => {
    const BackDropStyle: React.CSSProperties = {
        position: 'absolute',
        width: '100%',
        height: '100vh',
        background: 'rgba(0, 0, 0, 0.907)',
        zIndex: 2,
    }
    // toggle on or not
    props.toggle ? 
        BackDropStyle.display = 'block' : 
        BackDropStyle.display = 'none'
    return(
        <React.Fragment>
            <div className="back-drop-container" style={BackDropStyle}></div>
        </React.Fragment>
    )
}