import React from 'react'

export const AppMenu = () => {
    const menu_1 = React.useRef<HTMLDivElement>(null);
    const menu_2 = React.useRef<HTMLDivElement>(null);
    const menu_3 = React.useRef<HTMLDivElement>(null);

    const [toggleMenu, setToggleMenu] = React.useState(true); // suppose to be false but for the menu refs sake

    const animateMenuComponent = () => {
        toggleMenu ? (function(){
            menu_1.current!.style.top = "120px";
            menu_2.current!.style.top = "220px";
            menu_3.current!.style.top = "320px";
            setToggleMenu(false)
        })() : 
        (function(){
            console.log("first")
            menu_1.current!.style.top = "1.5rem";
            menu_2.current!.style.top = "1.5rem";
            menu_3.current!.style.top = "1.5rem";
            setToggleMenu(true)
        })()
    };
    return (
      <React.Fragment>
        <div className="app-menu-component--page">
          <div className="menu__container">
            <div className="menu-home" onClick={animateMenuComponent}>
              <div className="dot__container">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
              </div>
            </div>
            <div className="menu-option menu-1" ref={menu_1}>
              <i className="bi bi-question-lg"></i>
            </div>
            <div className="menu-option menu-2" ref={menu_2}></div>
            <div className="menu-option menu-3" ref={menu_3}>
              <i className="bi bi-gear"></i>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
}