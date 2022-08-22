import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import To_Logo from '../../../public/img/Masked_icon-removebg-preview.png'

interface IProps{
    position: string
}

let GLogoStyling: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    width: '100px',
    zIndex: 2,
    cursor: 'pointer',
}

export class Logo extends React.Component<IProps>{
    props
    LogoStyling
    constructor(props: IProps){
        super(props)
        this.props = props
        this.checkPosition()
        this.LogoStyling = Object.assign(GLogoStyling)
    }
    checkPosition(){
        if (this.props.position == "left"){
            this.LogoStyling.left = 0
        }
        this.LogoStyling.right = 0
    }
    render(): React.ReactNode {
        return(
            <React.Fragment>
                <img src={To_Logo} alt="Logo" style={this.LogoStyling}/>
            </React.Fragment>
        )
    }
}

export const LogoFC: React.FC<IProps>= (props: IProps) => {
let GLogoStyling: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    width: '100px',
    zIndex: 2,
    cursor: 'pointer'
}
    const navigate = useNavigate()
    var LogoStyling = Object.assign(GLogoStyling)
    if (props.position == "left"){
        GLogoStyling.left = 0
    }
    else { LogoStyling.right = 0 }
    const BackToHome = () => {  navigate("/start") }
    
    return(
        <React.Fragment>
            <img 
                src={To_Logo}
                alt="Logo" 
                style={LogoStyling}
                onClick={BackToHome}
            />
                
        </React.Fragment>
    )
}


