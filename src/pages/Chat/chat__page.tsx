import React from "react";
import UserPicture from "../../../public/img/user-picture.png";

export const ChatPage = () => {
  return (
    <React.Fragment>
      <div className="bg-primary chat__page__container">
        <div className="chat__header">
          <div className="parent--container">
            <div className="header--container">
              <div className="time">
                <span id="time">Time: 3hr 20min</span>
              </div>
              <button className="leave-btn">Leave</button>
            </div>
          </div>
        </div>
        <div className="chat__groups">
          <div className="parent--container">
            <div className="header--container">
              <p>masked display__name</p>
            </div>
            <div className="main--container">
              <div className="group--container">
                <div className="chat-group">
                  <img src={UserPicture} alt="" />
                  <div className="content--container">
                    <h3>masked Doe </h3>
                    <span>1hr 30min</span>
                  </div>
                </div>
                <div className="chat-group">
                  <img src={UserPicture} alt="" />
                  <div className="content--container">
                    <h3>masked Doe </h3>
                    <span>1hr 30min</span>
                  </div>
                </div>
                <div className="chat-group">
                  <img src={UserPicture} alt="" />
                  <div className="content--container">
                    <h3>masked Doe </h3>
                    <span>1hr 30min</span>
                  </div>
                </div>
                <div className="chat-group">
                  <img src={UserPicture} alt="" />
                  <div className="content--container">
                    <h3>masked Doe </h3>
                    <span>1hr 30min</span>
                  </div>
                </div>
                <div className="chat-group">
                  <img src={UserPicture} alt="" />
                  <div className="content--container">
                    <h3>masked Doe </h3>
                    <span>1hr 30min</span>
                  </div>
                </div>
                <div className="chat-group">
                  <img src={UserPicture} alt="" />
                  <div className="content--container">
                    <h3>masked Doe </h3>
                    <span>1hr 30min</span>
                  </div>
                </div>
              </div>
              <div className="footer--container">
                <div className="exit">
                  <i className="bi bi-x-lg"></i>&nbsp;Exit all
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="chat__area">
          <div className="area--container">
            <ul>
              <li className="person-1">
                <div className="content--container">
                  <p className="content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Beatae quae id est excepturi, in corporis accusamus
                    repudiandae architecto incidunt rerum.
                  </p>
                  <i className="bi bi-chevron-down"></i>
                </div>
                <p className="time">1:03 pm</p>
              </li>
              <li className="person-2">
                <div className="content--container">
                  <p className="content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsam, molestiae.
                  </p>
                  <i className="bi bi-chevron-down"></i>
                </div>
                <p className="time">12:30pm</p>
              </li>
              <li className="person-2">
                <div className="content--container">
                  <p className="content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsam, molestiae.
                  </p>
                  <i className="bi bi-chevron-down"></i>
                </div>
                <p className="time">12:30pm</p>
              </li>
              <li className="person-2">
                <div className="content--container">
                  <p className="content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsam, molestiae.
                  </p>
                  <i className="bi bi-chevron-down"></i>
                </div>
                <p className="time">12:30pm</p>
              </li>
            </ul>
          </div>
          <div className="to-bottom--container">
            <div className="to-bottom">
              <i className="bi bi-chevron-down"></i>
            </div>
          </div>
        </div>
        <div className="chat__input">
          <div className="parent--container">
            <div className="input--container">
              <div className="input--field">
                <input
                  type="text"
                  name="message"
                  id=""
                  placeholder="Enter Message"
                />
                <i className="bi bi-emoji-smile"></i>
              </div>
              <div className="send">
                <i className="bi bi-send"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

