import React from 'react'
import react from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '../../components/Logo'
import { Slider } from '../../components/Slide'
import HeroImage from '../../../public/img/Delivery girl.png';
import { navigateBack } from '../../util/utilities'

export const JonLinkPage = () => {
    return (
        <React.Fragment>
            <div className="bg-primary join-link-page">
                <nav>
                    <Logo position='left' />
                    <div className="back" onClick={navigateBack}>
                        <i className="bi bi-chevron-left"></i>Back
                    </div>
                </nav>
                <main>
                    <section>
                        <header>
                            <h3>Join using Link</h3>
                            <span className="create"><Link to="/create">Create link</Link></span>
                        </header>
                        <form action="">
                            <input type="text" placeholder='enter link' required/>
                            <input type="text" placeholder='enter display name' required/>
                            <input className="glass-btn" type="submit" value="Join" />
                        </form>
                    </section>
                    <div className="img">
                        <img src={HeroImage} alt="" />
                    </div>
                </main>
                <aside>
                    <Slider left={0} width= '30%' />
                </aside>
            </div>
        </React.Fragment>
    )
}