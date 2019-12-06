import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

const S = styled.div`
  opacity: 0;
  transition: 0.5s;
  &.load {
    opacity: 1;
  }

  .user {
    position: relative;
    margin: 20px;
    .user-img {
      display: inline-block;
      border-radius: 50%;
      width: 80px;
      overflow: hidden;
      height: 80px;
      box-shadow: var(--shadow);
      img {
        height: 100%;
      }
    }

    .name {
      position: absolute;
    }
  }

  .name {
    font-weight: bold;
    font-family: var(--font2);
    padding: 0px 20px;
    font-size: 25px;
  }
  .user-type {
    border-radius: 30px;
    text-transform: uppercase;
    padding: 5px 10px;
    color: white;
    box-shadow: var(--shadow);
    display: inline-block;
    margin: 20px 10px 0 10px;
    font-size: 15px;
  }

  hr {
    height: 3px;
    border-radius: 30px;
    width: calc(100% - 60px);
    margin: 20px auto;
  }

  .settings {
    font-size: 15px;
    hr {
      height: 3px;
      border-radius: 30px;
    }
    .setting {
      font-weight: bold;
      margin: 20px;
      text-transform: uppercase;
      font-family: var(--font2);
    }
    .option {
      margin: 30px;
      font-family: var(--font1);
    }
  }

  .dark-mode {
    font-size: 40px;
    color: ${props => (props.dark ? "white" : "black")};
    position: absolute;
    top: 0;
    right: 0;
    margin: 20px;
  }
`;

let user = {
  name: "Anne Marie",
  type: "photographer"
};

let settings = {
  account: ["Personal information", "Payments & payouts", "Notifications"],
  hosting: ["Learn about hosting", "List your space"],
  "referrals & credits": ["Invite friends", "Refer a host"],
  tools: ["Siri shortcuts"],
  support: ["Get help", "Give us feedback"],
  legal: ["Terms of service"],
  "log out": []
};

export const Profile = () => {
  const [load, setLoad] = useState(false);
  const dark = useSelector(state => state.dark);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoad(true);
    window.scrollTo(0, 0);
  }, []);

  return (
    <S dark={dark} className={load ? "load" : undefined}>
      <div className="user">
        <div className="user-img">
          <img
            alt="user"
            src="https://res.cloudinary.com/baudelaire/image/upload/w_200/v1575609803/focus-scene/profile.png"
          />
        </div>
        <span className="name">{user.name}</span>
        <br />
      </div>

      <div className="settings">
        {Object.keys(settings).map(x => (
          <div key={x}>
            <div className="setting">{x}</div>
            {settings[x].map(option => (
              <div key={option}>
                <div className="option">{option}</div>
                <hr />
              </div>
            ))}
          </div>
        ))}

        <i
          onClick={() => dispatch({ type: "dark" })}
          className="material-icons-round dark-mode"
        >
          brightness_6
        </i>
      </div>
    </S>
  );
};
