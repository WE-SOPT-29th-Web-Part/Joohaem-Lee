export type UserInfoStatus = "idle" | "pending" | "resolved" | "rejected";

export interface UserInfo {
  data: UserInfoData | null;
  status: UserInfoStatus;
}

// export type UserInfo = { status: "idle" } | { status: "pending" } | { status: "resolved", data: UserInfoData } | { status: "rejected" };

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