import { UserState } from "../user/user.slice";

export interface AppStore {
    user: UserState;
}