import React from 'react'

interface IProps{
    content: string,
    width?: string,
    onClick?: any
}

export const TransparentButton = (props: IProps) => {
    return (
        <React.Fragment>
            <div className="custom-btn btn-hover" style={{width: props.width}}>{props.content}</div>
        </React.Fragment>
    )
}

export const Button = (props: IProps) => {
    return (
        <React.Fragment>
            <div className="custom-btn" style={{width: props.width}}>{props.content}</div>
        </React.Fragment>
    )
}

export const GlassButton = (props: IProps) => {
    return(
        <React.Fragment>
            <div className="glass-btn" onClick={props.onClick}>{props.content}</div>
        </React.Fragment>
    )
}