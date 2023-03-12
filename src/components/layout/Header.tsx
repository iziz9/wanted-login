import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container>
      <Link to='/'>
        <div className="text">
          Wanted pre-onboarding course
        </div>
      </Link>
    </Container>
  )
};


const Container = styled.div`
  width: 100%;
  height: 70px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: royalblue;
  border-bottom: 2px solid beige;
  z-index: 9;

  .text {
    font-size: 30px;
    line-height: 65px;
    text-align: middle;
    margin-left: 200px;
    cursor: pointer;
    font-weight: bold;
    
    :hover {
      color: orange;
    }
  }

`

export default Header;
