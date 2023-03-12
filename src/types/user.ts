export interface UserInfo {
  userInfo: { name: string },
  username: string,
}

export interface User {
  username: string,
  password: string,
  userInfo: UserInfo
}
