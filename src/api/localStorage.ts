import { IToDoUser } from './users';

export class LS {
  private static readonly userStorageKey: string = 'todoUserList';

  public static setUsers(newUsers: IToDoUser[]): void {
    console.log(newUsers);
    localStorage.setItem(LS.userStorageKey, JSON.stringify(newUsers));
  }

  public static getUsers(): IToDoUser[] {
    const data = localStorage.getItem(LS.userStorageKey) ?? '[]';
    return JSON.parse(data);
  }
}
