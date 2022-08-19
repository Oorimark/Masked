import React from 'react'
import { motion } from 'framer-motion'
import { $secondary_color } from '../../util/pallete/index';

interface IProps {
    background?: string;
    left?: number;
    right?: string;
    width?: string;
    children?: any;
    animate?: boolean;
}
export const Slider: React.FC<IProps> = (props:IProps) => {
        const sliderStyle: React.CSSProperties = {
            position: 'absolute',
            height: '100vh',
            top: 0,
            padding: '50px 0 50px 50px',
            background: $secondary_color,
            left: props.left,
            right: props.right,
            width: props.width
        }
        return (
            <React.Fragment>
                {
                    props.animate ? 
                        <motion.div style={sliderStyle}
                            initial= {{width: 0}}
                            animate= {{width: props.width}}
                            transition= {{duration: 2}}>
                                { props.children }
                        </motion.div>
                        :
                        <div style={sliderStyle}>{ props.children }</div>
                }
            </React.Fragment>
        )

}