export interface IUser {
  id: string;
  name: string;
  surname: string;
  phone: string;
}

export type IUserState = { userList: IUser[]; userWillBeUpdated: IUser };

export interface IAppState {
  user: IUserState;
}
