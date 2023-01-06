import { generateRandomId } from '../utils/generateRandomId';
import { LS } from './localStorage';

export enum EImportance {
  'common' = 'common',
  'important' = 'important',
  'critical' = 'critical'
}

export interface IToDoTask {
  taskUID: string
  userID: string
  title: string
  isDone: boolean
  importance: EImportance
}

export class ToDoTasks {
  constructor(public uid: string) {}

  public getTasks = (): IToDoTask[] => {
    return LS.getTasks().filter((item) => item.userID === this.uid);
  }

  public getTask = (taskID: string): IToDoTask | null => {
    return LS.getTasks().filter((item) => item.taskUID === taskID)[0] ?? null;
  }

  public deleteTask(taskID: string): void {
    const newItemsList = LS.getTasks().filter((item) => item.taskUID !== taskID);
    console.log(newItemsList);
    LS.setTasks(newItemsList);
  }

  public toggleTask(taskID: string): void {
    const newItemsList = LS.getTasks();
    newItemsList.forEach((item, index, items) => {
      if (item.taskUID === taskID) {
        items[index].isDone = !items[index].isDone;
      }
    });
    LS.setTasks(newItemsList);
  }

  public addTask = (task: IToDoTask): void => {
    task.userID = this.uid;
    if (task.taskUID === '') {
      task.taskUID = generateRandomId();
    }
    const newItemsList = LS.getTasks();
    if (this.getTask(task.taskUID) !== null) {
      newItemsList.forEach((item, index, items) => {
        if (item.taskUID === task.taskUID) {
          Object.assign(items[index], task);
        }
      });
    } else {
      newItemsList.push(task);
    }
    LS.setTasks(newItemsList);
  }
}
