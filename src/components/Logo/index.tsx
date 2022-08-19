import React from 'react'
import To_Logo from '../../../public/img/Masked_icon-removebg-preview.png'

interface IProps{
    position: string
}

export class Logo extends React.Component<IProps>{
    props
    LogoStyling: React.CSSProperties = {
        position: 'absolute',
        top: 0,
        width: '100px',
        zIndex: 2,
    }
    constructor(props: IProps){
        super(props)
        this.props = props
        this.checkPosition()
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


