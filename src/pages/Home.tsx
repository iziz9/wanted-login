import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getCookie } from "../util/cookie";

const Home = () => {
  const [user, setUser] = useState<string | null>('')
  useEffect(() => {
    const username = localStorage.getItem('user')
    setUser(username)
    console.log(user)
  }, []);
  
  return (
    <Main>
      <div>
        {user && `${user}님, 반갑습니다.`} <br />
        MAIN
      </div>
    </Main>
  )
};

export const Main = styled.main`
  height: 100%;
  font-size: 30px;
  padding-top: 50px;
`
export default Home;
