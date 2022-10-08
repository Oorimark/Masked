import React from 'react'
import { LogoFC } from '../../components/Logo';
import { useNavigate } from 'react-router-dom';

type IProps = {
    swap?: boolean
}
export const NavigationBar = (props: IProps) => {
    const navigation = useNavigate()
    return (
      <React.Fragment>
        <div className="nav-bar--component">
          <nav>
            <div className="logo">
              <img
                src="../../../public/img/Masked_icon-removebg-preview.png"
                alt=""
              />
            </div>
            <div className="back" onClick={() => navigation(-1)}>
              <i className="bi bi-chevron-left"></i> Back
            </div>
          </nav>
        </div>
      </React.Fragment>
    );
}