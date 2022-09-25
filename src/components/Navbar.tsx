import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <Wrapper>
      <div className="nav">
        <ul id="nav-mobile">
          <li>
            <Link to="/">Main</Link>
          </li>
          <li>
            <Link to="/finished">Finished</Link>
          </li>
          <li>
            <Link to="/trash">Trash</Link>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  width: 50vw;
  color: white;
  margin: 0 auto;
  max-width: 25rem;
  border-radius: 10px;
  /* background-color: #e8f9fd; */
  background-color: #000000c8;
  font-size: 16px;
  font-weight: bold;

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: space-around;
    justify-items: center;
    padding: 7px 9px;
  }

  a {
    color: white;
  }
`;

export default Navbar;
