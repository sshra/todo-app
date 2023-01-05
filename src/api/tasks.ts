
export const enum EImportance {
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
