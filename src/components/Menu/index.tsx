import React from 'react'

type IProps = {
    position: string;
}
export const AppMenu = (props: IProps) => {
  const menu_1 = React.useRef<HTMLDivElement>(null);
  const menu_2 = React.useRef<HTMLDivElement>(null);
  const menu_3 = React.useRef<HTMLDivElement>(null);
  const menu_container = React.useRef<HTMLDivElement>(null);

  const [toggleMenu, setToggleMenu] = React.useState(true); // suppose to be false but for the menu refs sake

  function flowBottom() {
    menu_1.current!.style.top = "90px";
    menu_2.current!.style.top = "165px";
    menu_3.current!.style.top = "240px";
  }
  function flowTop() {
    menu_1.current!.style.top = "-70px";
    menu_2.current!.style.top = "-145px";
    menu_3.current!.style.top = "-220px";
  }

  React.useLayoutEffect(function(){
    // position menu option base on the props.position
    switch (props.position) {
      case "bottom":
        menu_container.current ? menu_container.current.style.bottom = "0": ""
        break;
      case "top":
        (menu_container.current) ? menu_container.current!.style.top = "0": ""
        break;
    }
  }, [])

  const animateMenuComponent = () => {
    toggleMenu
      ? (function () {
          console.log(toggleMenu);
          switch (props.position) {
            case "bottom":
              flowTop();
              menu_container.current!.style.bottom = "0";
              setToggleMenu(false);
              break;
            case "top":
              flowBottom();
              menu_container.current!.style.top = "0";
              setToggleMenu(false);
              break;
            default:
              console.log("default");
              setToggleMenu(false);
          }
        })()
      : (function () {
          console.log("first");
          menu_1.current!.style.top = ".85rem";
          menu_2.current!.style.top = ".85rem";
          menu_3.current!.style.top = ".85rem";
          setToggleMenu(true);
        })();
  };
  return (
    <React.Fragment>
      <div className="app-menu-component--page">
        <div className="menu__container" ref={menu_container}>
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