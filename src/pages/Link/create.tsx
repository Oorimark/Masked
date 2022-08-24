import React, { useEffect, useRef, useState, useContext } from 'react'
import react from 'react'
import { motion } from 'framer-motion'
import { Slider } from '../../components/Slide'
import { Logo, LogoFC } from '../../components/Logo'
import { Button, GlassButton } from '../../components/Buttons'
import Image from '../../../public/img/Message sent.png'
import { generate_random_value } from '../../util/generator'
import { PopUp } from '../../components/Pop-Up'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { AlertContext } from '../../components/Alert/Context'

export const CreateLinkPage: React.FC= () => {
    const navigate = useNavigate()
    //const {setalertcontext} = useContext(AlertContext)
    const [disableButton, setDisableButon] = useState<boolean>(true)
    const togglepopup = useRef<any>(null)
    const startdate = useRef<any>(null)
    const enddate = useRef<any>(null)
    const linkRef = useRef<any>(null)

    const GlassButtonClickExe = () => {
        togglepopup.current.alterToggle()
        console.log(startdate.current.value)
        linkRef.current.innerHTML = generate_random_value(10)
    }

    const FormExecution = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        GlassButtonClickExe()
        setDisableButon(false)
    }

    const Back = () => {
        navigate('/start')
    }
    return (
        <React.Fragment>
             <PopUp ref={togglepopup}>
                <div className="link-container">
                    <div className="link m-2" ref={linkRef} ></div>
                </div>
             </PopUp>

            <div className='bg-primary create-link-page'>
                <nav>
                    <LogoFC position='right' />
                    <div className="back" onClick={Back}>
                        <i className="bi bi-chevron-left"></i> Back
                    </div>
                </nav>
                <main>
                    <section>
                        <header>
                            <h3>Create Link</h3>
                            <span className="join"><Link to="/join">Join with link</Link></span>
                        </header>
                        <form action="" onSubmit={FormExecution}>
                            <input type="text" name="" id="" placeholder='Enter display name' required/>
                            <div className="disp-fl-sb">
                            <input type="time" name="" id=""
                                    placeholder='Conversation time (eg: 11:30)' 
                                    required
                                    max={5}
                                    ref={startdate}/>
                            <input type="time" name=""
                                    placeholder='Conversation time (eg: 11:30)' required
                                    max={5}
                                    ref={enddate}/>
                            </div>
                            <input className='glass-btn' type="submit" value="generate token" />
                            <Button content='Go To Room' disable={disableButton}/>
                        </form>
                    </section>
                    <div className="img">
                        <img src={Image} alt="" />
                    </div>
                </main>
                <motion.aside 
                className="slider">
                    <Slider background='red' width='30%' right='0' animate={false} >
                    </Slider>
                </motion.aside>
            </div>
        </React.Fragment>
    )
}

