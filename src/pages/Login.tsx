import React, { useState, useRef, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { setCookie } from "../util/cookie";
import { UserInfo } from '../types/user'
import { getCurrentUserInfo, getCurrentUserInfoWithToken, loginWithToken } from '../api/login'

const Login = () => {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null)
  const isDataFetched = useRef(false)
  const navigate = useNavigate()

  const getUserInfo = useCallback(async () => {
    const user = await getCurrentUserInfo()
    if (user === null) return
    setUserInfo(user)
    isDataFetched.current = true
  }, [])

  useEffect(() => {
    if (isDataFetched.current) return
    getUserInfo()
  }, []);
  

  const onSubmit = async (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    const loginPayload = {
      username: formData.get('username') as string,
      password: formData.get('password') as string
    }

    const loginResult = await loginWithToken(loginPayload)
    if (loginResult.result === 'fail') return

    // 실습1
    // const user = await getCurrentUserInfoWithToken(loginResult.access_token)
    // if (!user) return null
    // setUserInfo(user)
    // alert(`${user.userInfo.name}님, 반갑습니다.`)
    // setCookie('login', JSON.stringify(user))
    // navigate('/')

    //실습2
    const user = await getCurrentUserInfo()
    if (userInfo === null) return
    setUserInfo(userInfo)
  }


  return (
    <Main>
      <div className="title">
        <h1>로그인</h1>
      </div>
      <div className="back">
        <div onClick={() => navigate('/')}>
          🔙 메인으로 돌아가기</div>
      </div>
      <section>
        <form onSubmit={onSubmit}>
          <div>
            <label htmlFor="id">아이디</label>
            <input type='text' placeholder="아이디를 입력해주세요." id='id' name='username' />
          </div>
          <div>
            <label htmlFor="pw">비밀번호</label>
            <input type='password' placeholder="비밀번호를 입력해주세요." id='pw' name='password' />
          </div>
          <button type="submit" value="Submit">로그인하기</button>
        </form>
      </section>
    </Main>
  )
};

const Main = styled.main`
position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;

  .title {
    width: 100%;
    position: absolute;
    text-align: center;
    margin-top: 100px;
  }

  .back {
    position: absolute;
    padding: 30px;
    cursor: pointer;

    :hover {
      color: orange;
    }
  }
  
  section {
    background-color: royalblue;
    width: 500px;
    height: 400px;
    margin: auto;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    label {
      font-size: 20px;
      line-height: 30px;
      color: white;
    }

    input {
      width: 300px;
      margin-bottom: 20px;
    }

    button {
      margin: 30px auto 0;
    }
  }
`


export default Login;
