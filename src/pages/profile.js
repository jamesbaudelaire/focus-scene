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
    margin: 20px;
    img {
      border-radius: 50%;
      width: 80px;
      height: 80px;
      box-shadow: var(--shadow);
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
      width: 80%;
      margin: 40px auto;
    }
  }

  .settings {
    font-size: 20px;
    margin: 30px;
    hr {
      height: 3px;
      border-radius: 30px;
    }
    .setting {
      font-weight: bold;
      margin: 30px 0;
      text-transform: uppercase;
      font-family: var(--font2);
    }
    .option {
      margin: 20px 0px;
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
        <img
          alt="user"
          className="user-img"
          src="https://res.cloudinary.com/baudelaire/image/upload/v1574749092/focus-scene/user.png"
        />
        <span className="name">{user.name}</span>
        <br />
        <span className="user-type" style={{ background: "var(--theme1)" }}>
          {user.type}
        </span>
        <span className="user-type" style={{ background: "var(--theme2)" }}>
          venue owner
        </span>
        <hr />
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
