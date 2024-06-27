export interface ResourceResponse {
  items: UserResponse[]
}

export interface UserResponse {
  avatar_url: string,
  id: string,
  login: string,
  html_url: string,
  type: string
}
