import { IToDoTask } from './tasks';
import { IToDoUser } from './users';

export class LS {
  private static readonly userStorageKey: string = 'todoUserList';
  private static readonly taskStorageKey: string = 'todoTaskList';

  public static setUsers(newUsers: IToDoUser[]): void {
    localStorage.setItem(LS.userStorageKey, JSON.stringify(newUsers));
  }

  public static getUsers(): IToDoUser[] {
    const data = localStorage.getItem(LS.userStorageKey) ?? '[]';
    return JSON.parse(data);
  }

  public static setTasks(newTasks: IToDoTask[]): void {
    localStorage.setItem(LS.taskStorageKey, JSON.stringify(newTasks));
  }

  public static getTasks(): IToDoTask[] {
    const data = localStorage.getItem(LS.taskStorageKey) ?? '[]';
    return JSON.parse(data);
  }
}
