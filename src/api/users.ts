import { capitalizeFirstLetter } from '../utils/capitalizeFirstLetter';
import { generateRandomId } from '../utils/generateRandomId';
import { LS } from './localStorage';

export interface IToDoUser {
  uid: string
  name: string
}

const isToDoUser = (b: any): b is IToDoUser => {
  return (b as IToDoUser).name !== undefined &&
        (b as IToDoUser).uid !== undefined &&
        typeof (b as IToDoUser).uid === 'string' &&
        typeof (b as IToDoUser).name === 'string';
}

const isToDoUserArray = (b: IToDoUser[]): b is IToDoUser[] => {
  let result = true;
  if (!Array.isArray(b)) return false;
  b.forEach((user: IToDoUser): void => { result = result && isToDoUser(user) });
  return result;
}

export class Users {
  public static addUser = (name: string): IToDoUser => {
    const newUser: IToDoUser = {
      uid: generateRandomId(),
      name: capitalizeFirstLetter(name)
    };
    const users = this.getList();
    users.push(newUser);
    LS.setUsers(users);
    return newUser;
  }

  public static getUserByID = (uid: string): IToDoUser | null => {
    return this.getList().filter((user) => user.uid === uid)[0] ?? null;
  }

  public static getUserByName = (name: string): IToDoUser | null => {
    return this.getList().filter((user) => user.name === name)[0] ?? null;
  }

  public static getList = (): IToDoUser[] => {
    const users = LS.getUsers().sort((a, b) => a.name < b.name ? -1 : 1);
    return isToDoUserArray(users) ? users : [];
  }
}
