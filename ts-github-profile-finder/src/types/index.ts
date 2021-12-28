export type UserInfoStatus = "idle" | "pending" | "resolved" | "rejected";

export interface UserInfo {
  data: UserInfoData | null;
  status: UserInfoStatus;
}

export interface UserInfoData {
  avatar_url: string;
  name: string;
  login: string;
  bio: string;
  html_url: string;
  followers: number;
  following: number;
  public_repos: number;
}