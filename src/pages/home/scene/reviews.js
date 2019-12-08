import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Stars } from "ui/stars";

const S = styled.div`
  margin: 20px;
  margin-top: 30px;
  .review {
    .user {
      border-radius: 50%;
      box-shadow: var(--shadow);
      width: 50px;
      margin-bottom: 10px;
    }
    .name {
      display: inline-block;
      vertical-align: top;
      line-height: 50px;
      margin: 0 20px;
      font-family: var(--font2);
      font-size: 18px;
    }

    .text {
      font-size: 16px;
      margin: 10px 0 30px 0;
    }
  }
`;

export const Reviews = ({ scene }) => {
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    fetch("https://randomuser.me/api/?results=3&nat=us")
      .then(response => response.json())
      .then(data => {
        setUsers(data.results);
      });
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <S>
      {users.map((x, i) => (
        <div className="review" key={users[i].id.value}>
          <img className="user" alt="user" src={users[i].picture.medium} />
          <div className="name">
            {users[i].name.first} {users[i].name.last}
          </div>
          <Stars data={{ stars: 5 - i }} />
          <div className="text">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentiums.
          </div>
        </div>
      ))}
    </S>
  );
};
