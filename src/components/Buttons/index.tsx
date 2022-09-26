import React from 'react'
import { Link } from 'react-router-dom'

interface IProps{
    content: string,
    width?: string,
    disable?: boolean,
    url?: string,
    onClick?: any
}

const disableButtonStyle: React.CSSProperties = {
        opacity : 0.4,
        cursor : 'default',
}
const enableButtonStyle: React.CSSProperties = {
        opacity : 1,
        cursor : 'pointer',
}
let disableEnableStyle: React.CSSProperties = {};

export const TransparentButton = (props: IProps) => {
    props.disable ? disableEnableStyle = {...disableButtonStyle} : disableEnableStyle = {...enableButtonStyle}
    return (
        <React.Fragment>
            <div className="custom-btn btn-hover" style={{...disableEnableStyle, width: props.width}}>
                {
                    props.disable ? 
                    props.content :
                    <Link to={props.url ? props.url : ""}>{props.content}</Link> 
                }
            </div>
        </React.Fragment>
    )
}

export const Button = (props: IProps) => {
    props.disable ? disableEnableStyle = {...disableButtonStyle} : disableEnableStyle = {...enableButtonStyle}
    return (
        <React.Fragment>
            <div className="custom-btn" style={{...disableEnableStyle, width: props.width}}>
                {
                    props.disable ? 
                    props.content :
                    <Link to={props.url || ""}>{props.content}</Link> 
                }
            </div>
        </React.Fragment>
    )
}

export const GlassButton = (props: IProps) => {
    props.disable ? disableEnableStyle = {...disableButtonStyle} : disableEnableStyle = {...enableButtonStyle}
    return(
        <React.Fragment>
            <div className="glass-btn" onClick={props.onClick}>
                {
                    props.disable ? 
                    props.content :
                    <Link to={props.url ? props.url : ""}>{props.content}</Link> 
                }
            </div>
        </React.Fragment>
    )
}